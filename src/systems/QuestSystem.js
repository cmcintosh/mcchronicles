// QuestSystem.js — Side quest and story beat tracking

import { SIDE_QUESTS, STORY_BEATS } from '../data/story.js';

export default class QuestSystem {
  constructor() {
    this.activeQuests = [];      // Array of { questId, progress, objective }
    this.completedQuests = [];   // Array of quest IDs (strings)
    this.availableQuests = [];   // Array of full quest objects
    this.storyProgress = [];     // Array of seen beat IDs (strings)
    this._initialized = false;
  }

  /**
   * Initialize the quest system by loading side quests into availableQuests.
   * Safe to call multiple times — will not duplicate.
   */
  init() {
    if (this._initialized) return;

    // Load all side quests as available
    if (SIDE_QUESTS && Array.isArray(SIDE_QUESTS)) {
      this.availableQuests = SIDE_QUESTS.map(q => ({ ...q }));
    }

    this._initialized = true;
  }

  /**
   * Accept a quest, moving it from available to active.
   * @param {string} questId - The quest ID to accept
   * @returns {boolean} True if the quest was successfully accepted
   */
  acceptQuest(questId) {
    const quest = this.availableQuests.find(q => q.id === questId);
    if (!quest) return false;

    // Remove from available
    this.availableQuests = this.availableQuests.filter(q => q.id !== questId);

    // Add to active with progress tracking
    this.activeQuests.push({
      questId: quest.id,
      progress: 0,
      objective: quest.objective,
      name: quest.name,
      region: quest.region,
      giver: quest.giver,
      description: quest.description,
      reward: quest.reward,
    });

    return true;
  }

  /**
   * Update the progress of an active quest.
   * @param {string} questId - The quest ID to update
   * @param {number} progress - New progress value
   * @returns {boolean} True if the quest was found and updated
   */
  updateProgress(questId, progress) {
    const quest = this.activeQuests.find(q => q.questId === questId);
    if (!quest) return false;

    quest.progress = progress;
    return true;
  }

  /**
   * Complete an active quest, moving it to completed and returning rewards.
   * @param {string} questId - The quest ID to complete
   * @returns {object|null} The reward object { gold, items } or null if quest not active
   */
  completeQuest(questId) {
    const quest = this.activeQuests.find(q => q.questId === questId);
    if (!quest) return null;

    // Remove from active
    this.activeQuests = this.activeQuests.filter(q => q.questId !== questId);

    // Add to completed
    this.completedQuests.push(questId);

    // Return rewards
    return quest.reward || { gold: 0, items: [] };
  }

  /**
   * Check if a quest is currently active.
   * @param {string} questId
   * @returns {boolean}
   */
  isQuestActive(questId) {
    return this.activeQuests.some(q => q.questId === questId);
  }

  /**
   * Check if a quest has been completed.
   * @param {string} questId
   * @returns {boolean}
   */
  isQuestCompleted(questId) {
    return this.completedQuests.includes(questId);
  }

  /**
   * Get all active quests.
   * @returns {object[]}
   */
  getActiveQuests() {
    return this.activeQuests;
  }

  /**
   * Get all available quests.
   * @returns {object[]}
   */
  getAvailableQuests() {
    return this.availableQuests;
  }

  /**
   * Get all completed quest IDs.
   * @returns {string[]}
   */
  getCompletedQuests() {
    return this.completedQuests;
  }

  /**
   * Mark a story beat as seen.
   * @param {string} beatId - The story beat ID
   * @returns {boolean} True if newly seen, false if already seen
   */
  seeStoryBeat(beatId) {
    if (this.storyProgress.includes(beatId)) {
      return false;
    }
    this.storyProgress.push(beatId);
    return true;
  }

  /**
   * Check if a story beat has been seen.
   * @param {string} beatId
   * @returns {boolean}
   */
  hasSeenBeat(beatId) {
    return this.storyProgress.includes(beatId);
  }

  /**
   * Serialize to a plain object for saving.
   * @returns {object}
   */
  toData() {
    return {
      activeQuests: this.activeQuests.map(q => ({ ...q })),
      completedQuests: [...this.completedQuests],
      availableQuests: this.availableQuests.map(q => ({ ...q })),
      storyProgress: [...this.storyProgress],
    };
  }

  /**
   * Restore from saved data.
   * @param {object} data - The saved data object from toData()
   */
  fromData(data) {
    if (!data) return;

    this.activeQuests = (data.activeQuests || []).map(q => ({ ...q }));
    this.completedQuests = [...(data.completedQuests || [])];
    this.availableQuests = (data.availableQuests || []).map(q => ({ ...q }));
    this.storyProgress = [...(data.storyProgress || [])];
    this._initialized = true;
  }
}

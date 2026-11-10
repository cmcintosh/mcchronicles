# McChronicles — Audio System Specification

> **Target:** Full JRPG audio experience — music, SFX, ambient, voice
> **Current State:** 75 edge-tts voice narration files (1.8MB), basic AudioSystem.js
> **No music, no SFX, no ambient sound currently**

---

## 1. Music Design (20 tracks)

### Track List

| # | Track Name | Purpose | Mood | Tempo | Length | Loop |
|---|-----------|---------|------|-------|--------|------|
| M01 | McWorld Overture | Title screen | Whimsical, inviting, orchestral | 90 BPM | 2:30 | Yes |
| M02 | Fry Valley Fields | Fry Valley overworld | Bright, adventurous, folk | 110 BPM | 2:00 | Yes |
| M03 | Highland Trek | Burger Highlands overworld | Majestic, determined | 100 BPM | 2:00 | Yes |
| M04 | Cafe Corner | McCafe Springs town | Cozy, warm, jazz piano | 80 BPM | 2:30 | Yes |
| M05 | Frozen Melody | McFlurry Tundra overworld | Ethereal, cold, crystalline | 70 BPM | 2:00 | Yes |
| M06 | Desert Mirage | Drive-Thru Desert overworld | Mysterious, sparse, Arabian | 85 BPM | 2:00 | Yes |
| M07 | Toyland Waltz | Happy Meal Forest overworld | Playful, magical, music box | 120 BPM | 1:45 | Yes |
| M08 | Playground Hero | Play Place Plains overworld | Energetic, fun, pop | 130 BPM | 1:45 | Yes |
| M09 | Golden Throne | Golden Arches Castle | Epic, solemn, organ | 60 BPM | 2:30 | Yes |
| M10 | Shadow Realm | Shadow Realm | Dark, dissonant, ambient | 50 BPM | 3:00 | Yes |
| M11 | Battle Beat | Standard battle | Tense, driving, rock | 140 BPM | 1:30 | Yes |
| M12 | Boss Battle | Boss battle | Dramatic, heavy, orchestral | 150 BPM | 2:00 | Yes |
| M13 | Hamburglar's Theme | Hamburglar confrontation | Emotional, conflicted, minor key | 75 BPM | 2:30 | Yes |
| M14 | McLord's Shadow | Final boss (phases 1-3) | Epic, dark, massive | 160 BPM | 3:00 | Yes |
| M15 | Golden Purification | Final boss phase 4 | Triumphant, orchestral, uplifting | 170 BPM | 2:00 | No |
| M16 | Victory Fanfare | Battle victory | Triumphant, short | 120 BPM | 0:15 | No |
| M17 | Restful Night | Inn/save | Calm, peaceful, lullaby | 60 BPM | 1:30 | Yes |
| M18 | Heart Strings | Emotional scenes | Sad, strings, slow | 50 BPM | 2:00 | Yes |
| M19 | Mini-Game Mix | Mini-games | Fun, bouncy, chiptune | 135 BPM | 1:30 | Yes |
| M20 | Breakfast Dawn | Post-game (Breakfast Kingdom) | Adventurous, fresh, new | 115 BPM | 2:00 | Yes |

### McDonald's-Themed Instrumentation
- **Lead melodies:** Glockenspiel, music box, xylophone (whimsical, toy-like)
- **Bass:** Upright bass, synth bass (warm, grounded)
- **Percussion:** Light percussion, hand claps, tambourine (playful)
- **Atmosphere:** Celesta, choir aahs (magical, dreamy)
- **Battle:** Electric guitar, driving drums (energetic)
- **Emotional:** Solo piano, strings (intimate)

---

## 2. Music Generation Strategy

### Recommended: Tone.js v14
- **Why:** Web Audio API wrapper, designed for procedural music, small bundle (~50KB)
- **Capability:** Oscillators, samples, effects, scheduling, transport
- **Approach:** Define each track as a Tone.js sequence/pattern
- **Bundle size:** ~50KB for Tone.js + ~5KB per track definition = ~150KB total

### Architecture
```javascript
// AudioEngine.js
import * as Tone from 'tone';

class MusicEngine {
  constructor() {
    this.currentTrack = null;
    this.layerCount = 0; // For adaptive intensity
    this.buses = {
      music: new Tone.Gain(0.7).toDestination(),
      sfx: new Tone.Gain(0.8).toDestination(),
      voice: new Tone.Gain(1.0).toDestination(),
      ambient: new Tone.Gain(0.5).toDestination()
    };
  }
  
  async init() {
    await Tone.start();
    this.masterVolume = new Tone.Volume(0).toDestination();
  }
  
  playTrack(trackId) {
    if (this.currentTrack) this.stopTrack();
    this.currentTrack = TRACK_DEFINITIONS[trackId];
    this.currentTrack.start();
  }
  
  stopTrack() {
    if (this.currentTrack) {
      this.currentTrack.stop();
      this.currentTrack = null;
    }
  }
  
  transitionTo(trackId, fadeTime = 1.0) {
    // Crossfade between tracks
    if (this.currentTrack) {
      this.currentTrack.fadeOut(fadeTime);
    }
    setTimeout(() => {
      this.playTrack(trackId);
      if (this.currentTrack) this.currentTrack.fadeIn(fadeTime);
    }, fadeTime * 1000);
  }
  
  setIntensity(level) {
    // 0 = calm, 1 = normal, 2 = intense
    // Add/remove layers based on intensity
  }
}
```

### Track Definition Example
```javascript
const TRACK_DEFINITIONS = {
  M02: {
    // Fry Valley Fields — bright folk
    start() {
      const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.3, release: 1 }
      }).connect(this.buses.music);
      
      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.1, decay: 0.3, sustain: 0.4, release: 0.5 }
      }).connect(this.buses.music);
      
      // Melody: C major pentatonic
      const melody = new Tone.Sequence((time, note) => {
        synth.triggerAttackRelease(note, '8n', time);
      }, ['C4', 'E4', 'G4', 'A4', 'G4', 'E4', 'D4', 'E4'], '4n');
      
      // Bass line
      const bassLine = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '2n', time);
      }, ['C2', 'A2', 'F2', 'G2'], '1n');
      
      Tone.Transport.bpm.value = 110;
      Tone.Transport.start();
      melody.start(0);
      bassLine.start(0);
    },
    stop() { Tone.Transport.stop(); },
    fadeIn(t) { /* ramp music bus gain */ },
    fadeOut(t) { /* ramp music bus gain */ }
  }
};
```

### Alternative: Pure Web Audio API
- **Pro:** Zero bundle size, no dependencies
- **Con:** More code, harder to compose, no scheduling abstraction
- **Verdict:** Use Tone.js for development speed; can port to pure Web Audio later if bundle is an issue

---

## 3. SFX Design (100+ effects)

### Battle SFX (40)
| SFX | Trigger | Synthesis Method |
|-----|---------|-----------------|
| hit_physical | Physical attack lands | Noise burst + lowpass, 100ms |
| hit_critical | Critical hit | Noise burst + ring mod, 150ms |
| hit_magical | Magic attack lands | Oscillator sweep + reverb, 200ms |
| hit_enemy | Enemy takes damage | Pitched noise, 100ms |
| enemy_defeat | Enemy KO'd | Descending tone + noise, 300ms |
| level_up | Level up | Ascending arpeggio, 500ms |
| ability_slash | Slash ability | Filtered noise sweep, 200ms |
| ability_fire | Fire spell | Low noise + descending pitch, 300ms |
| ability_ice | Ice spell | High crystal tones + reverb, 250ms |
| ability_electric | Electric spell | Sawtooth buzz + ring mod, 200ms |
| ability_holy | Holy spell | Bell tone + ascending harmonics, 400ms |
| ability_dark | Dark spell | Detuned low oscillators, 300ms |
| ability_heal | Healing spell | Rising sine + bell, 400ms |
| ability_buff | Buff applied | Warm chord stab, 200ms |
| ability_debuff | Debuff applied | Descending dissonant tone, 200ms |
| block | Attack blocked | Metallic clink, 80ms |
| miss | Attack misses | Whoosh, 150ms |
| flee_success | Escaped battle | Rising whoosh, 300ms |
| flee_fail | Failed escape | Buzz, 100ms |
| victory | Battle won | Short fanfare (3 notes), 800ms |
| game_over | Party KO'd | Descending sad tones, 2s |
| combo | Combo triggered | Double hit + bell, 250ms |
| ... (18 more ability-specific SFX) | | |

### UI SFX (20)
| SFX | Trigger | Synthesis |
|-----|---------|-----------|
| ui_navigate | Move cursor in menu | Short blip, 50ms |
| ui_select | Select option | Double blip, 80ms |
| ui_cancel | Cancel/back | Descending blip, 80ms |
| ui_cursor | Cursor move | Subtle tick, 30ms |
| ui_error | Invalid action | Buzz, 100ms |
| ui_save | Save successful | Chime, 300ms |
| ui_load | Load successful | Rising chime, 300ms |
| ui_quest_accept | Quest accepted | Fanfare (2 notes), 400ms |
| ui_quest_complete | Quest completed | Full fanfare (4 notes), 600ms |
| ui_item | Item acquired | Sparkle, 150ms |
| ui_level_up | Level up UI | Ascending notes, 500ms |
| ui_shop_buy | Purchase | Coin sound, 150ms |
| ui_shop_sell | Sell | Coin + register, 200ms |
| ui_equip | Equipment changed | Click + chime, 150ms |
| ui_unequip | Equipment removed | Click, 100ms |
| ui_craft | Craft success | Ding, 200ms |
| ui_craft_fail | Craft fail | Fizzle, 200ms |
| ui_save_point | Save point activated | Warm hum + chime, 500ms |
| ui_fast_travel | Fast travel | Whoosh + chime, 400ms |
| ui_notification | Notification appears | Soft bell, 200ms |

### World SFX (20)
| SFX | Trigger | Synthesis |
|-----|---------|-----------|
| footstep_grass | Walk on grass | Soft thud, 80ms |
| footstep_stone | Walk on stone | Hard click, 60ms |
| footstep_snow | Walk on snow | Crunch, 100ms |
| footstep_sand | Walk on sand | Soft scrape, 80ms |
| footstep_wood | Walk on wood | Hollow thud, 80ms |
| treasure_chest | Open chest | Wood creak + lid, 300ms |
| door_open | Open door | Creak, 400ms |
| encounter_alert | Random encounter | Whoosh + alert tone, 200ms |
| region_enter | Enter new region | Whoosh, 500ms |
| camp_set | Set up camp | Fire crackle, 400ms |
| save_point_hum | Save point ambient | Warm hum, loop |
| familiar_collect | Collect familiar | Sparkle + chime, 300ms |
| cooking_done | Cooking complete | Ding + sizzle, 400ms |
| clock_chime | Day transition (if added) | Bell, 500ms |
| water_splash | Step in water | Splash, 150ms |
| bush_rustle | Walk through bush | Leaf rustle, 100ms |
| rock_break | Break rock | Crack, 200ms |
| ice_break | Break ice | Glass break, 200ms |
| fall_damage | Fall damage | Thud + groan, 200ms |
| jump | Jump | Whoosh, 100ms |

### Environment SFX (20)
| SFX | Region | Synthesis |
|-----|--------|-----------|
| wind_gentle | Fry Valley | Filtered noise, slow modulation |
| wind_mountain | Burger Highlands | Stronger noise, lower pitch |
| water_flow | McCafe Springs | Bubble noise + highpass |
| ice_crack | McFlurry Tundra | Random crack sounds |
| sand_drift | Drive-Thru Desert | Soft noise, rhythmic |
| forest_birds | Happy Meal Forest | Oscillator chirps, random |
| playground | Play Place Plains | Distant laugh sounds, reverb |
| castle_echo | Golden Arches Castle | Reverb on footstep |
| shadow_hum | Shadow Realm | Low drone, detuned |
| fire_crackle | Any (camp, fire enemy) | Noise + random crackle |
| rain | Any (weather) | Filtered noise, continuous |
| thunder | Any (weather) | Loud noise burst + reverb |
| crowd_murmur | Towns | Multiple low voices, filtered |
| magic_hum | Save points | Warm sine wave, slow modulation |
| portal_open | Shadow Rift | Rising tone + noise |
| ... (4 more) | | |

### SFX Synthesis (Web Audio API)
```javascript
class SfxEngine {
  constructor(ctx, bus) {
    this.ctx = ctx;
    this.bus = bus; // GainNode connected to destination
  }
  
  // Example: Physical hit
  hitPhysical() {
    const now = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    const buffer = this.ctx.createBuffer(1, 4410, 44100); // 100ms
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 1000);
    }
    noise.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.1);
    
    noise.connect(filter);
    filter.connect(this.bus);
    noise.start(now);
  }
  
  // Example: Level up
  levelUp() {
    const now = this.ctx.currentTime;
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = freq;
      osc.type = 'triangle';
      gain.gain.setValueAtTime(0, now + i * 0.1);
      gain.gain.linearRampToValueAtTime(0.3, now + i * 0.1 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
      osc.connect(gain);
      gain.connect(this.bus);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.3);
    });
  }
}
```

---

## 4. Ambient Sound System

### Per-Region Soundscapes
```javascript
class AmbientEngine {
  constructor(ctx, bus) {
    this.ctx = ctx;
    this.bus = bus;
    this.layers = [];
  }
  
  startAmbient(regionId) {
    this.stopAmbient();
    const config = AMBIENT_CONFIG[regionId];
    
    // Base layer: wind/atmosphere
    const wind = this.createWind(config.windColor, config.windIntensity);
    this.layers.push(wind);
    
    // Region-specific layer
    if (config.extra) {
      const extra = this.createExtraLayer(config.extra);
      this.layers.push(extra);
    }
  }
  
  createWind(color, intensity) {
    // Filtered brown noise
    const noise = createBrownNoise(this.ctx);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = color; // Hz, determines wind "color"
    filter.Q.value = 0.5;
    
    const gain = this.ctx.createGain();
    gain.gain.value = intensity;
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    noise.start();
    
    return { noise, filter, gain };
  }
  
  stopAmbient() {
    this.layers.forEach(layer => {
      if (layer.noise) layer.noise.stop();
      if (layer.osc) layer.osc.stop();
    });
    this.layers = [];
  }
}
```

### Region Ambient Config
| Region | Wind Color (Hz) | Wind Intensity | Extra Layer |
|--------|-----------------|----------------|-------------|
| Fry Valley | 400 | 0.15 | Bird chirps (random oscillator) |
| Burger Highlands | 200 | 0.30 | Rock rumble (low noise bursts) |
| McCafe Springs | 600 | 0.10 | Water bubbles (high noise pops) |
| McFlurry Tundra | 150 | 0.35 | Ice crack (random sharp noise) |
| Drive-Thru Desert | 300 | 0.25 | Sand hiss (high noise, rhythmic) |
| Happy Meal Forest | 500 | 0.08 | Toy chimes (bell tones, random) |
| Play Place Plains | 700 | 0.05 | Distant laughter (filtered noise) |
| Golden Arches Castle | 250 | 0.15 | Magic hum (low drone) |
| Shadow Realm | 100 | 0.20 | Shadow whisper (detuned noise) |

---

## 5. Voice Expansion

### Current State
- 75 edge-tts voice files (narration only)
- Character voice mapping established

### Expansion Plan

| Category | Files Needed | Priority |
|----------|-------------|----------|
| Main story (96 beats × 6-7 lines) | ~650 | 1 — with story implementation |
| Side quests (40 quests × 5 lines) | ~200 | 2 — with quest implementation |
| NPC dialogue (15 NPCs × ~10 lines) | ~150 | 3 — with region implementation |
| Combat barks (8 chars × 10 barks) | ~80 | 4 — polish phase |
| System/UI (save, shop, level up, etc.) | ~90 | 5 — polish phase |
| **Total new files** | **~1,170** | |

### Voice Map (Updated with New Characters)
| Character | edge-tts Voice | Direction |
|-----------|---------------|-----------|
| Narrator | en-US-GuyNeural | Warm, storybook |
| Ronald McDonald | en-US-ChristopherNeural | Cheerful, can break into vulnerability |
| Grimace | en-US-EricNeural | Gentle, slow, deep |
| Birdie | en-US-JennyNeural | Energetic, higher pitch, cracks when scared |
| Officer Big Mac | en-US-BrianNeural | Authoritative, pompous, softens later |
| Mac Tonight | en-US-RogerNeural | Smooth, jazzy, crooner |
| Professor Fry (NEW) | en-US-AldoNeural | Rapid, excitable, slightly nasal |
| Happy Meal Kid (NEW) | en-US-AriaNeural | Childlike, warm, slightly echo-y |
| Captain Croissant (NEW) | en-US-FioreNeural | French accent, theatrical |
| Hamburglar | en-US-DavisNeural | Raspy, whispery, "robble robble" |
| Condiment King Ketchup | en-US-GuyNeural (pitched up) | Theatrical, over-the-top |
| Condiment King Mustard | en-US-DavisNeural (sly) | Sly, condescending |
| Condiment King BBQ | en-US-BrianNeural (pitched down) | Gravelly, few words |
| Condiment King Secret Sauce | multi-voice (layered) | Echoing, cryptic |
| McLord of Shadows | en-US-DavisNeural (pitched + echoed) | Void-like, inhuman |
| NPCs (various) | Various | Regional accents |

### Batch Generation Script
```python
#!/usr/bin/env python3
"""Batch voice generation for McChronicles"""
import asyncio
import edge_tts
import json
from pathlib import Path

VOICE_MAP = {
    "narrator": "en-US-GuyNeural",
    "ronald": "en-US-ChristopherNeural",
    "grimace": "en-US-EricNeural",
    "birdie": "en-US-JennyNeural",
    "big_mac": "en-US-BrianNeural",
    "mac_tonight": "en-US-RogerNeural",
    "professor_fry": "en-US-AldoNeural",
    "happy_meal_kid": "en-US-AriaNeural",
    "captain_croissant": "en-US-FioreNeural",
    "hamburglar": "en-US-DavisNeural",
}

async def generate_voice(text, character, output_path):
    voice = VOICE_MAP.get(character, "en-US-GuyNeural")
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

async def batch_generate(dialogue_file, output_dir):
    """dialogue_file: JSON with [{beat_id, lines: [{character, text}]}]"""
    with open(dialogue_file) as f:
        dialogue = json.load(f)
    
    tasks = []
    for beat in dialogue:
        for i, line in enumerate(beat["lines"]):
            filename = f"{beat['beat_id']}_{i:02d}_{line['character']}.mp3"
            path = Path(output_dir) / filename
            if not path.exists():  # Skip if already generated
                tasks.append(generate_voice(line["text"], line["character"], str(path)))
    
    await asyncio.gather(*tasks)
    print(f"Generated {len(tasks)} voice files")
```

### Combat Barks
| Character | Bark | Text |
|-----------|------|------|
| Ronald | Attack | "Here goes!" |
| Ronald | Critical | "Bullseye!" |
| Ronald | Damaged | "Oof!" |
| Ronald | Victory | "That's how we do it!" |
| Ronald | Level up | "Feeling stronger!" |
| Ronald | KO'd | "Sorry... everyone..." |
| Ronald | Ultimate | "This is for everyone!" |
| Ronald | Low HP | "I'm not done yet..." |
| Ronald | Heal | "Thanks!" |
| Ronald | Flee | "Tactical retreat!" |
| (Similar for all 8 characters) | | |

---

## 6. Audio Engine Architecture

### Web Audio API Setup
```javascript
class AudioEngine {
  constructor() {
    this.ctx = null; // Created on first user interaction
    this.buses = {};
    this.music = null;
    this.sfx = null;
    this.ambient = null;
    this.voice = null;
  }
  
  async init() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Master gain
    this.master = this.ctx.createGain();
    this.master.gain.value = 1.0;
    this.master.connect(this.ctx.destination);
    
    // Buses
    this.buses.music = this.ctx.createGain();
    this.buses.music.gain.value = 0.7;
    this.buses.music.connect(this.master);
    
    this.buses.sfx = this.ctx.createGain();
    this.buses.sfx.gain.value = 0.8;
    this.buses.sfx.connect(this.master);
    
    this.buses.voice = this.ctx.createGain();
    this.buses.voice.gain.value = 1.0;
    this.buses.voice.connect(this.master);
    
    this.buses.ambient = this.ctx.createGain();
    this.buses.ambient.gain.value = 0.5;
    this.buses.ambient.connect(this.master);
    
    // Initialize sub-engines
    this.music = new MusicEngine(this.ctx, this.buses.music);
    this.sfx = new SfxEngine(this.ctx, this.buses.sfx);
    this.ambient = new AmbientEngine(this.ctx, this.buses.ambient);
    this.voice = new VoicePlayer(this.ctx, this.buses.voice);
  }
  
  setVolume(bus, value) {
    if (this.buses[bus]) {
      this.buses[bus].gain.setValueAtTime(value, this.ctx.currentTime);
    }
  }
}
```

### 3D Positional Audio
```javascript
class PositionalAudio {
  static create(ctx, bus, position, maxDistance = 20) {
    const panner = ctx.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'exponential';
    panner.maxDistance = maxDistance;
    panner.setPosition(position.x, position.y, position.z);
    panner.connect(bus);
    return panner;
  }
}
// Used for: NPC dialogue, enemy approach sounds, treasure chimes, save point hum
```

### Voice Playback
```javascript
class VoicePlayer {
  constructor(ctx, bus) {
    this.ctx = ctx;
    this.bus = bus;
    this.currentAudio = null;
    this.muted = false;
  }
  
  async play(filePath) {
    if (this.muted) return;
    if (this.currentAudio) {
      this.currentAudio.stop();
    }
    
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);
    
    const source = this.ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.bus);
    source.start();
    
    this.currentAudio = source;
    return new Promise(resolve => {
      source.onended = () => {
        this.currentAudio = null;
        resolve();
      };
    });
  }
  
  stop() {
    if (this.currentAudio) {
      this.currentAudio.stop();
      this.currentAudio = null;
    }
  }
  
  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) this.stop();
  }
}
```

---

## 7. Dynamic Music System

### State Transitions
```
Overworld Music
    ↓ (encounter triggered)
Battle Music (crossfade 0.5s)
    ↓ (battle won)
Victory Fanfare (0.5s after battle music stops)
    ↓ (fanfare ends)
Overworld Music (fade in 1s)

Overworld Music
    ↓ (enter town)
Town Music (crossfade 1s)

Overworld Music
    ↓ (enter boss room)
Boss Music (crossfade 0.5s)

Boss Music
    ↓ (boss defeated)
Victory Fanfare → Emotional Music (if story beat) or Overworld (if optional)
```

### Adaptive Layers (Boss Battles)
```javascript
// Boss music has 3 layers that activate based on boss HP
// Layer 1 (100-66% HP): Base melody + bass
// Layer 2 (65-33% HP): Add drums + harmony
// Layer 3 (32-0% HP): Add intense lead + faster tempo

function updateBossMusicIntensity(bossHpPercent) {
  if (bossHpPercent > 0.66) music.setIntensity(0);
  else if (bossHpPercent > 0.33) music.setIntensity(1);
  else music.setIntensity(2);
}
```

---

## 8. Bundle Size Budget

| Component | Size | Notes |
|-----------|------|-------|
| Tone.js | ~50KB | Minified + gzipped |
| Track definitions | ~5KB each × 20 = 100KB | Code, not audio files |
| SFX engine | ~15KB | Synthesis code |
| Ambient engine | ~8KB | Synthesis code |
| Voice files | ~24KB avg × 1,210 = ~29MB | MP3, can compress to Opus (~15MB) |
| Total music | 0KB | Procedural synthesis |
| Total SFX | 0KB | Procedural synthesis |
| Total ambient | 0KB | Procedural synthesis |
| **Total audio budget** | **~29MB** | **Voice is the bulk; music/SFX/ambient are procedural** |

### Voice Compression Strategy
- Current: MP3 at ~24KB/file
- Option 1: Opus at 24kbps → ~12KB/file (50% reduction → ~14.5MB total)
- Option 2: Load voice per-region (only ~2-3MB loaded at once)
- Recommended: Option 2 (per-region loading) for memory efficiency

---

## 9. Implementation Priority

### Phase 1: Minimum Viable Audio (Day 1)
- [ ] AudioEngine.js — Web Audio API setup with buses
- [ ] SfxEngine.js — 10 core SFX (hit, crit, heal, level up, ui_navigate, ui_select, ui_cancel, victory, game_over, save)
- [ ] VoicePlayer.js — Voice file playback (integrate existing 75 files)

### Phase 2: Music System (Day 2)
- [ ] Install Tone.js
- [ ] MusicEngine.js — Track management, transitions
- [ ] 3 tracks: Title (M01), Overworld (M02), Battle (M11)
- [ ] Dynamic transitions: overworld → battle → victory → overworld

### Phase 3: Full SFX + Ambient (Day 3)
- [ ] All 40 battle SFX
- [ ] All 20 UI SFX
- [ ] All 20 world SFX
- [ ] All 20 environment SFX
- [ ] AmbientEngine.js with per-region ambient
- [ ] 8 region ambient soundscapes

### Phase 4: Full Music (Day 4)
- [ ] All 20 music tracks defined
- [ ] Adaptive boss music layers
- [ ] Emotional scene music triggers

### Phase 5: Voice Expansion (Days 5-10, alongside story content)
- [ ] Batch generation script
- [ ] Act 1 voice files (~120 files)
- [ ] Act 2 voice files (~160 files)
- [ ] Act 3 voice files (~160 files)
- [ ] Act 4 voice files (~120 files)
- [ ] Act 5 voice files (~80 files)
- [ ] Side quest voice files (~200 files)
- [ ] NPC voice files (~150 files)
- [ ] Combat barks (~80 files)
- [ ] System voice (~90 files)

---

*Document Version: 1.0*
*Created: 2026-11-10*
*Author: Spock (CTO), Wembassy*
*Status: READY FOR IMPLEMENTATION*
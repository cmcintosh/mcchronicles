#!/usr/bin/env python3
"""Generate 9 missing backdrop images for McChronicles JRPG."""

from PIL import Image, ImageDraw, ImageFilter, ImageFont
import random
import math
import os

random.seed(42)

OUTDIR = "/Volumes/Extreme Pro/Documents/cto/mcchronicles/public/backdrops"
W, H = 1024, 576

def lerp(a, b, t):
    return a + (b - a) * t

def lerp_color(c1, c2, t):
    return tuple(int(lerp(c1[i], c2[i], t)) for i in range(3))

def vertical_gradient(draw, w, h, top_color, bottom_color):
    for y in range(h):
        t = y / h
        c = lerp_color(top_color, bottom_color, t)
        draw.line([(0, y), (w, y)], fill=c)

def radial_gradient(img, cx, cy, radius, inner_color, outer_color):
    """Create a radial gradient on a separate image and return it."""
    grad = Image.new('RGB', img.size, outer_color)
    gdraw = ImageDraw.Draw(grad)
    for r in range(int(radius), 0, -1):
        t = 1 - (r / radius)
        c = lerp_color(outer_color, inner_color, t)
        x0, y0 = cx - r, cy - r
        x1, y1 = cx + r, cy + r
        gdraw.ellipse([x0, y0, x1, y1], fill=c)
    return grad

def add_stars(draw, w, h, count=80, brightness_range=(150, 255)):
    for _ in range(count):
        x = random.randint(0, w)
        y = random.randint(0, h // 2)
        b = random.randint(*brightness_range)
        size = random.choice([1, 1, 1, 2])
        draw.ellipse([x, y, x+size, y+size], fill=(b, b, b-20 if b > 20 else 0))

def add_glow(img, cx, cy, radius, color, alpha=120):
    """Add a soft glow effect."""
    glow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    for r in range(radius, 0, -2):
        a = int(alpha * (1 - r / radius) ** 2)
        gdraw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(*color, a))
    glow = glow.filter(ImageFilter.GaussianBlur(15))
    img.paste(Image.alpha_composite(img.convert('RGBA'), glow).convert('RGB'))
    return img

def add_silhouette(draw, points, color=(20, 15, 10)):
    draw.polygon(points, fill=color)

def add_mountains(draw, w, h, base_y, peaks, color):
    """Draw mountain silhouettes."""
    points = [(0, h)]
    for px, py in peaks:
        points.append((px, py))
    points.append((w, h))
    draw.polygon(points, fill=color)

def add_ground(draw, w, h, y, color):
    draw.rectangle([0, y, w, h], fill=color)

def add_particles(img, count, color, y_range, size_range=(1, 3), alpha_range=(50, 150)):
    """Add floating particle effects."""
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for _ in range(count):
        x = random.randint(0, img.width)
        y = random.randint(*y_range)
        s = random.randint(*size_range)
        a = random.randint(*alpha_range)
        draw.ellipse([x, y, x+s, y+s], fill=(*color, a))
    overlay = overlay.filter(ImageFilter.GaussianBlur(2))
    return Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')

def fog_overlay(img, alpha=60):
    """Add a subtle fog layer."""
    fog = Image.new('RGBA', img.size, (200, 190, 180, 0))
    fdraw = ImageDraw.Draw(fog)
    for _ in range(20):
        x = random.randint(0, img.width)
        y = random.randint(img.height // 2, img.height)
        r = random.randint(50, 150)
        a = random.randint(10, alpha)
        fdraw.ellipse([x-r, y-r//2, x+r, y+r//2], fill=(220, 210, 200, a))
    fog = fog.filter(ImageFilter.GaussianBlur(30))
    return Image.alpha_composite(img.convert('RGBA'), fog).convert('RGB')

def save(img, name):
    path = os.path.join(OUTDIR, name)
    img.save(path)
    print(f"Saved: {path}")

# ============================================================
# 1. CAMPFIRE — Heroes around a campfire at night
# ============================================================
def gen_campfire():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Night sky gradient
    vertical_gradient(draw, W, H, (15, 10, 35), (40, 20, 50))
    # Stars
    add_stars(draw, W, H, 100)
    # Moon
    draw.ellipse([W-180, 50, W-120, 110], fill=(240, 235, 200))
    draw.ellipse([W-170, 55, W-110, 115], fill=(40, 20, 50))
    # Distant mountains
    add_mountains(draw, W, H, H, [
        (0, 350), (150, 280), (300, 320), (450, 260),
        (600, 300), (750, 250), (900, 290), (W, 310)
    ], (25, 18, 40))
    # Closer hills
    add_mountains(draw, W, H, H, [
        (0, 420), (200, 360), (400, 400), (600, 370),
        (800, 390), (W, 380)
    ], (20, 15, 30))
    # Ground
    add_ground(draw, W, H, 430, (15, 10, 20))
    # Campfire glow
    img = add_glow(img, W//2, 440, 200, (255, 180, 60), alpha=100)
    draw = ImageDraw.Draw(img)
    # Fire base
    for i in range(5):
        x = W//2 - 15 + i*6
        draw.ellipse([x, 445, x+8, 455], fill=(60, 40, 20))
    # Flames
    for i in range(12):
        fx = W//2 + random.randint(-15, 15)
        fy = 440 - random.randint(5, 30)
        fh = random.randint(15, 35)
        fw = random.randint(6, 12)
        c = random.choice([(255, 180, 40), (255, 140, 30), (255, 100, 20), (220, 80, 10)])
        draw.polygon([(fx, fy), (fx-fw//2, fy+fh), (fx+fw//2, fy+fh)], fill=c)
    # Hero silhouettes
    # Left hero
    draw.ellipse([W//2-90, 390, W//2-60, 420], fill=(10, 8, 15))
    draw.polygon([(W//2-85, 415), (W//2-65, 415), (W//2-55, 480), (W//2-95, 480)], fill=(10, 8, 15))
    # Right hero
    draw.ellipse([W//2+60, 390, W//2+90, 420], fill=(10, 8, 15))
    draw.polygon([(W//2+65, 415), (W//2+85, 415), (W//2+95, 480), (W//2+55, 480)], fill=(10, 8, 15))
    # Center hero (further back)
    draw.ellipse([W//2-15, 380, W//2+15, 410], fill=(8, 6, 12))
    draw.polygon([(W//2-12, 405), (W//2+12, 405), (W//2+18, 460), (W//2-18, 460)], fill=(8, 6, 12))
    # Sparks
    img = add_particles(img, 30, (255, 200, 80), (380, 440), (1, 2), (80, 180))
    save(img, "campfire.png")

# ============================================================
# 2. CAVERN_MURALS — Ancient cave walls with glowing murals
# ============================================================
def gen_cavern_murals():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Dark cavern background
    vertical_gradient(draw, W, H, (15, 8, 5), (30, 15, 8))
    # Cave wall texture - irregular shapes
    for _ in range(40):
        x = random.randint(0, W)
        y = random.randint(0, H)
        r = random.randint(20, 80)
        c = (random.randint(20, 40), random.randint(10, 25), random.randint(5, 15))
        draw.ellipse([x-r, y-r, x+r, y+r], fill=c)
    # Mural areas - glowing golden shapes on walls
    mural_positions = [(200, 200), (500, 250), (800, 180), (350, 400), (700, 380)]
    for mx, my in mural_positions:
        # Glow behind mural
        img = add_glow(img, mx, my, 80, (255, 200, 80), alpha=60)
        draw = ImageDraw.Draw(img)
        # Fry-like shapes (golden lines)
        for i in range(5):
            angle = random.uniform(0, math.pi * 2)
            length = random.randint(20, 40)
            x2 = mx + math.cos(angle) * length
            y2 = my + math.sin(angle) * length
            draw.line([(mx, my), (x2, y2)], fill=(255, 200, 60), width=3)
        # Arch shapes
        draw.arc([mx-30, my-30, mx+30, my+30], 0, 180, fill=(255, 180, 40), width=3)
    # Stalactites
    for x in range(0, W, 40):
        h = random.randint(15, 50)
        draw.polygon([(x, 0), (x+20, 0), (x+10, h)], fill=(20, 12, 8))
    # Stalagmites
    for x in range(50, W, 60):
        h = random.randint(10, 40)
        draw.polygon([(x, H), (x+20, H), (x+10, H-h)], fill=(18, 10, 6))
    # Floor
    add_ground(draw, W, H, H-60, (25, 15, 10))
    # Particles (dust motes)
    img = add_particles(img, 25, (255, 200, 100), (100, 500), (1, 3), (30, 80))
    save(img, "cavern_murals.png")

# ============================================================
# 3. DRIVE_THRU_DESERT — Vast desert with distant drive-thru sign
# ============================================================
def gen_drive_thru_desert():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Hot desert sky
    vertical_gradient(draw, W, H, (180, 120, 60), (240, 180, 100))
    # Sun
    sun_x, sun_y = W//2, 120
    img = add_glow(img, sun_x, sun_y, 100, (255, 240, 180), alpha=150)
    draw = ImageDraw.Draw(img)
    draw.ellipse([sun_x-40, sun_y-40, sun_x+40, sun_y+40], fill=(255, 250, 200))
    # Distant dunes
    add_mountains(draw, W, H, H, [
        (0, 380), (200, 340), (400, 370), (600, 350),
        (800, 360), (W, 350)
    ], (200, 150, 80))
    # Mid dunes
    add_mountains(draw, W, H, H, [
        (0, 430), (250, 400), (500, 420), (750, 405), (W, 415)
    ], (180, 130, 70))
    # Foreground sand
    add_ground(draw, W, H, 440, (160, 110, 55))
    # Sand texture
    for _ in range(60):
        x = random.randint(0, W)
        y = random.randint(440, H)
        r = random.randint(3, 15)
        c = (random.randint(140, 180), random.randint(90, 120), random.randint(40, 70))
        draw.ellipse([x-r, y-r, x+r, y+r], fill=c)
    # Distant drive-thru sign (golden arches silhouette)
    sign_x = W // 2
    sign_y = 330
    # Pole
    draw.rectangle([sign_x-3, sign_y, sign_x+3, sign_y+80], fill=(80, 50, 20))
    # Golden arches shape (M)
    draw.arc([sign_x-25, sign_y-20, sign_x-5, sign_y+20], 180, 360, fill=(220, 160, 40), width=4)
    draw.arc([sign_x+5, sign_y-20, sign_x+25, sign_y+20], 180, 360, fill=(220, 160, 40), width=4)
    # Sign board
    draw.rectangle([sign_x-35, sign_y+25, sign_x+35, sign_y+55], fill=(180, 30, 30), outline=(220, 160, 40), width=2)
    # Heat shimmer particles
    img = add_particles(img, 20, (255, 220, 150), (300, 450), (1, 2), (20, 50))
    save(img, "drive_thru_desert.png")

# ============================================================
# 4. MCCAFE_SPRINGS — Steaming hot springs town
# ============================================================
def gen_mccafe_springs():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Warm golden sky
    vertical_gradient(draw, W, H, (255, 180, 80), (255, 220, 140))
    # Distant mountains
    add_mountains(draw, W, H, H, [
        (0, 320), (120, 250), (280, 290), (440, 230),
        (600, 270), (760, 240), (900, 280), (W, 300)
    ], (120, 80, 60))
    # Steam clouds
    for _ in range(8):
        x = random.randint(0, W)
        y = random.randint(200, 350)
        r = random.randint(40, 80)
        img = add_glow(img, x, y, r, (255, 240, 220), alpha=50)
    draw = ImageDraw.Draw(img)
    # Town buildings (cozy, warm)
    buildings = [
        (100, 380, 120, 460, (160, 60, 40)),
        (250, 370, 100, 460, (180, 70, 50)),
        (380, 360, 140, 460, (140, 50, 35)),
        (550, 375, 110, 460, (170, 65, 45)),
        (690, 365, 130, 460, (150, 55, 38)),
        (850, 380, 120, 460, (175, 68, 48)),
    ]
    for bx, by, bw, bh, bc in buildings:
        draw.rectangle([bx, by, bx+bw, bh], fill=bc)
        # Roof
        draw.polygon([(bx-10, by), (bx+bw+10, by), (bx+bw//2, by-25)], fill=(100, 30, 20))
        # Windows (warm glow)
        draw.rectangle([bx+15, by+20, bx+35, by+40], fill=(255, 220, 120))
        draw.rectangle([bx+bw-35, by+20, bx+bw-15, by+40], fill=(255, 220, 120))
    # Ground / street
    add_ground(draw, W, H, 460, (80, 50, 35))
    # Hot springs pools
    for px, py in [(300, 490), (600, 500), (880, 485)]:
        draw.ellipse([px-30, py-15, px+30, py+15], fill=(100, 180, 200))
        draw.ellipse([px-25, py-12, px+25, py+12], fill=(140, 210, 220))
    # Steam from springs
    for px, py in [(300, 490), (600, 500), (880, 485)]:
        img = add_glow(img, px, py-20, 40, (255, 250, 240), alpha=70)
    draw = ImageDraw.Draw(img)
    # Golden arches decoration on a building
    draw.arc([420, 365, 445, 385], 180, 360, fill=(255, 200, 50), width=3)
    draw.arc([450, 365, 475, 385], 180, 360, fill=(255, 200, 50), width=3)
    save(img, "mccafe_springs.png")

# ============================================================
# 5. MCCAFE_SPRINGS_ARRIVAL — First view from mountain pass
# ============================================================
def gen_mccafe_springs_arrival():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Mountain pass sky - warm
    vertical_gradient(draw, W, H, (100, 70, 50), (255, 180, 90))
    # Far mountains
    add_mountains(draw, W, H, H, [
        (0, 200), (150, 120), (300, 180), (450, 100),
        (600, 160), (750, 110), (900, 170), (W, 150)
    ], (80, 50, 40))
    # Mid mountains
    add_mountains(draw, W, H, H, [
        (0, 300), (200, 220), (400, 280), (600, 230),
        (800, 270), (W, 250)
    ], (60, 40, 30))
    # Valley below with warm glow
    img = add_glow(img, W//2, 400, 200, (255, 200, 100), alpha=80)
    draw = ImageDraw.Draw(img)
    # Distant town silhouette
    for bx in range(200, 800, 30):
        bh = random.randint(10, 25)
        draw.rectangle([bx, 380, bx+25, 380+bh], fill=(40, 25, 20))
    # Steam rising from valley
    for _ in range(6):
        x = random.randint(200, 800)
        y = random.randint(350, 400)
        img = add_glow(img, x, y, 30, (255, 240, 220), alpha=40)
    draw = ImageDraw.Draw(img)
    # Trail / path winding down
    draw.polygon([(100, H), (140, 500), (200, 480), (250, 460),
                  (300, 440), (350, 420), (400, 400)], fill=(90, 60, 35))
    # Foreground rocks
    for _ in range(10):
        x = random.randint(0, W)
        y = random.randint(480, H)
        r = random.randint(10, 30)
        draw.ellipse([x-r, y-r, x+r, y+r], fill=(50, 35, 25))
    save(img, "mccafe_springs_arrival.png")

# ============================================================
# 6. MCFLURRY_TUNDRA — Frozen tundra with aurora
# ============================================================
def gen_mcflurry_tundra():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Cold night sky
    vertical_gradient(draw, W, H, (10, 15, 40), (30, 40, 70))
    # Aurora (green-blue bands)
    aurora = Image.new('RGBA', img.size, (0, 0, 0, 0))
    adraw = ImageDraw.Draw(aurora)
    for i in range(5):
        y_base = 80 + i * 20
        points = []
        for x in range(0, W, 10):
            y = y_base + math.sin(x * 0.01 + i) * 30 + random.randint(-10, 10)
            points.append((x, y))
        for j in range(len(points) - 1):
            c = random.choice([(80, 255, 120, 60), (120, 200, 255, 50), (100, 255, 180, 40)])
            adraw.line([points[j], points[j+1], (points[j+1][0], points[j+1][1]+40)], fill=c, width=3)
    aurora = aurora.filter(ImageFilter.GaussianBlur(10))
    img = Image.alpha_composite(img.convert('RGBA'), aurora).convert('RGB')
    draw = ImageDraw.Draw(img)
    # Stars
    add_stars(draw, W, H, 60, brightness_range=(180, 255))
    # Snow-capped mountains
    add_mountains(draw, W, H, H, [
        (0, 350), (150, 200), (300, 280), (450, 180),
        (600, 250), (750, 190), (900, 270), (W, 240)
    ], (40, 45, 65))
    # Snow caps
    for px, py in [(150, 200), (450, 180), (750, 190)]:
        draw.polygon([(px-30, py+20), (px+30, py+20), (px, py)], fill=(220, 230, 240))
    # Frozen ground
    add_ground(draw, W, H, 380, (180, 195, 220))
    # Ice crystals
    for _ in range(30):
        x = random.randint(0, W)
        y = random.randint(400, H)
        s = random.randint(4, 10)
        c = random.choice([(180, 220, 255), (200, 230, 255), (160, 200, 240)])
        draw.polygon([(x, y-s), (x+s//2, y), (x, y+s), (x-s//2, y)], fill=c)
    # Snow particles
    img = add_particles(img, 50, (255, 255, 255), (0, H), (1, 3), (60, 150))
    save(img, "mcflurry_tundra.png")

# ============================================================
# 7. MOUNTAIN_SUMMIT_TRAIL — Mountain trail with vista
# ============================================================
def gen_mountain_summit_trail():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Dramatic sky
    vertical_gradient(draw, W, H, (80, 120, 180), (200, 220, 240))
    # Clouds below
    for _ in range(15):
        x = random.randint(0, W)
        y = random.randint(350, 450)
        r = random.randint(30, 70)
        img = add_glow(img, x, y, r, (240, 250, 255), alpha=100)
    draw = ImageDraw.Draw(img)
    # Distant peaks
    add_mountains(draw, W, H, H, [
        (0, 380), (100, 280), (250, 330), (400, 260),
        (550, 310), (700, 270), (850, 320), (W, 300)
    ], (100, 90, 110))
    # Closer mountain sides
    draw.polygon([(0, H), (0, 400), (200, 350), (350, 420), (500, 380),
                  (650, 440), (800, 400), (W, 420), (W, H)], fill=(70, 55, 50))
    # Winding trail
    trail_points = [(W//2, H), (W//2 - 30, H-60), (W//2 + 20, H-120),
                    (W//2 - 40, H-180), (W//2 + 10, H-240),
                    (W//2 - 20, H-300), (W//2, H-350)]
    for i in range(len(trail_points) - 1):
        draw.line([trail_points[i], trail_points[i+1]], fill=(140, 100, 60), width=12)
    # Golden way markers on trail
    for i, (tx, ty) in enumerate(trail_points[::2]):
        if ty > 300:
            draw.ellipse([tx-4, ty-4, tx+4, ty+4], fill=(255, 200, 50))
    # Scattered rocks
    for _ in range(15):
        x = random.randint(0, W)
        y = random.randint(420, H)
        r = random.randint(5, 15)
        draw.ellipse([x-r, y-r, x+r, y+r], fill=(60, 45, 40))
    save(img, "mountain_summit_trail.png")

# ============================================================
# 8. PLAY_PLACE_PLAINS — Colorful plains with playground structures
# ============================================================
def gen_play_place_plains():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Bright cheerful sky
    vertical_gradient(draw, W, H, (100, 180, 255), (180, 220, 255))
    # Fluffy clouds
    for _ in range(8):
        x = random.randint(0, W)
        y = random.randint(30, 150)
        for ox in range(-30, 30, 10):
            r = random.randint(15, 30)
            img = add_glow(img, x+ox, y, r, (255, 255, 255), alpha=120)
    draw = ImageDraw.Draw(img)
    # Rolling hills
    add_mountains(draw, W, H, H, [
        (0, 380), (200, 340), (400, 360), (600, 335),
        (800, 355), (W, 345)
    ], (100, 200, 80))
    add_mountains(draw, W, H, H, [
        (0, 430), (250, 400), (500, 420), (750, 405), (W, 415)
    ], (80, 180, 60))
    # Foreground plains
    add_ground(draw, W, H, 420, (90, 170, 55))
    # Playground structures (colorful, McDonald's themed)
    # Slide (red)
    draw.rectangle([150, 380, 180, 440], fill=(220, 40, 40))
    draw.polygon([(150, 440), (180, 440), (220, 480), (190, 480)], fill=(220, 40, 40))
    # Merry-go-round (yellow)
    draw.ellipse([320, 430, 380, 470], fill=(255, 200, 40))
    draw.ellipse([330, 438, 370, 462], fill=(255, 220, 80))
    # Swing set (red frame, yellow seats)
    draw.line([(450, 380), (460, 470)], fill=(180, 30, 30), width=4)
    draw.line([(530, 380), (520, 470)], fill=(180, 30, 30), width=4)
    draw.line([(455, 380), (525, 380)], fill=(180, 30, 30), width=4)
    draw.rectangle([485, 420, 495, 445], fill=(255, 200, 40))
    # Climbing frame (golden arches)
    draw.arc([600, 380, 680, 460], 180, 360, fill=(255, 180, 30), width=5)
    draw.line([(600, 420), (680, 420)], fill=(255, 180, 30), width=3)
    # Tubes/tunnels (red and yellow)
    draw.ellipse([750, 440, 830, 480], fill=(220, 40, 40))
    draw.ellipse([760, 445, 820, 475], fill=(180, 30, 30))
    draw.ellipse([860, 440, 940, 480], fill=(255, 200, 40))
    draw.ellipse([870, 445, 930, 475], fill=(255, 220, 80))
    # Flowers
    for _ in range(30):
        x = random.randint(0, W)
        y = random.randint(430, H)
        c = random.choice([(255, 200, 50), (220, 40, 40), (255, 150, 180), (200, 100, 255)])
        draw.ellipse([x-3, y-3, x+3, y+3], fill=c)
    save(img, "play_place_plains.png")

# ============================================================
# 9. VILLAGE_FAREWELL — Villagers waving goodbye at dawn
# ============================================================
def gen_village_farewell():
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    # Dawn sky - warm emotional colors
    vertical_gradient(draw, W, H, (255, 140, 80), (255, 200, 120))
    # Sun rising
    img = add_glow(img, W//2, 200, 120, (255, 230, 150), alpha=120)
    draw = ImageDraw.Draw(img)
    draw.ellipse([W//2-30, 170, W//2+30, 230], fill=(255, 240, 180))
    # Distant mountains in morning haze
    add_mountains(draw, W, H, H, [
        (0, 350), (150, 280), (300, 320), (450, 260),
        (600, 300), (750, 250), (900, 290), (W, 310)
    ], (180, 130, 100))
    # Village buildings
    buildings = [
        (80, 380, 100, 470, (160, 80, 50)),
        (200, 370, 120, 470, (180, 90, 55)),
        (340, 375, 100, 470, (150, 75, 45)),
        (460, 365, 130, 470, (170, 85, 50)),
        (610, 378, 110, 470, (155, 78, 48)),
        (740, 372, 120, 470, (175, 88, 52)),
        (880, 380, 100, 470, (165, 82, 50)),
    ]
    for bx, by, bw, bh, bc in buildings:
        draw.rectangle([bx, by, bx+bw, bh], fill=bc)
        # Roof
        draw.polygon([(bx-8, by), (bx+bw+8, by), (bx+bw//2, by-22)], fill=(120, 40, 25))
        # Warm windows
        draw.rectangle([bx+10, by+15, bx+25, by+30], fill=(255, 220, 120))
        draw.rectangle([bx+bw-25, by+15, bx+bw-10, by+30], fill=(255, 220, 120))
    # Ground / path
    add_ground(draw, W, H, 470, (100, 65, 40))
    # Path leading away
    draw.polygon([(W//2-20, H), (W//2+20, H), (W//2+60, 470), (W//2-60, 470)], fill=(130, 90, 55))
    # Villager silhouettes (waving)
    villager_positions = [180, 250, 350, 500, 600, 700, 800]
    for vx in villager_positions:
        # Head
        draw.ellipse([vx-8, 450, vx+8, 466], fill=(30, 20, 15))
        # Body
        draw.polygon([(vx-10, 465), (vx+10, 465), (vx+12, 500), (vx-12, 500)], fill=(30, 20, 15))
        # Waving arm
        draw.line([(vx+8, 470), (vx+20, 455)], fill=(30, 20, 15), width=4)
    # Heroes walking away (small, in distance)
    for hx in [W//2 - 20, W//2, W//2 + 20]:
        draw.ellipse([hx-5, 480, hx+5, 490], fill=(20, 15, 10))
        draw.polygon([(hx-6, 489), (hx+6, 489), (hx+8, 510), (hx-8, 510)], fill=(20, 15, 10))
    # Warm light particles (dawn dust)
    img = add_particles(img, 20, (255, 220, 150), (300, 500), (1, 2), (30, 70))
    save(img, "village_farewell.png")

# ============================================================
# Generate all
# ============================================================
if __name__ == "__main__":
    os.makedirs(OUTDIR, exist_ok=True)
    gen_campfire()
    gen_cavern_murals()
    gen_drive_thru_desert()
    gen_mccafe_springs()
    gen_mccafe_springs_arrival()
    gen_mcflurry_tundra()
    gen_mountain_summit_trail()
    gen_play_place_plains()
    gen_village_farewell()
    print("\nAll 9 backdrops generated successfully!")

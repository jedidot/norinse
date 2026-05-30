"""Replace English text in BathingSequenceChart.pdf with Korean."""
from __future__ import annotations

import shutil
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
EN_SOURCE = ROOT / "docs" / "_BathingSequenceChart_en.pdf"
OUT_DOCS = ROOT / "docs" / "BathingSequenceChart_ko.pdf"
OUT_PUBLIC = ROOT / "public" / "docs" / "BathingSequenceChart_ko.pdf"

# (search text, replacement, font size hint — None keeps original span size)
REPLACEMENTS: list[tuple[str, str]] = [
    ("Bathing", "목욕"),
    ("Sequence", "순서"),
    ("Chart", "안내"),
    ("FACE, NECK, CHEST", "얼굴, 목, 가슴"),
    ("LEFT ARM", "왼쪽 팔"),
    ("RIGHT ARM", "오른쪽 팔"),
    ("BACK", "등"),
    ("BUTTOCKS", "엉덩이"),
    ("PERINEUM", "회음부"),
    ("LEFT LEG", "왼쪽 다리"),
    ("RIGHT LEG", "오른쪽 다리"),
]

FONT_REG = r"C:\Windows\Fonts\malgun.ttf"
FONT_BOLD = r"C:\Windows\Fonts\malgunbd.ttf"


def main() -> None:
    if not EN_SOURCE.exists():
        legacy = ROOT / "docs" / "BathingSequenceChart.pdf"
        if not legacy.exists():
            raise SystemExit(f"Missing English source PDF: {EN_SOURCE}")
        shutil.copy2(legacy, EN_SOURCE)

    doc = fitz.open(EN_SOURCE)
    page = doc[0]

    inserts: list[tuple[fitz.Point, str, float, bool]] = []

    for block in page.get_text("dict")["blocks"]:
        if block["type"] != 0:
            continue
        for line in block["lines"]:
            for span in line["spans"]:
                text = span["text"].strip()
                replacement = next(
                    (new for old, new in REPLACEMENTS if old == text), None
                )
                if not replacement:
                    continue
                rect = fitz.Rect(span["bbox"])
                size = span["size"]
                bold = "Bold" in span["font"]
                page.add_redact_annot(rect, fill=(1, 1, 1))
                inserts.append((fitz.Point(span["origin"]), replacement, size, bold))

    page.apply_redactions()

    for point, text, size, bold in inserts:
        fontfile = FONT_BOLD if bold else FONT_REG
        fontsize = size
        if bold and len(text) > 4:
            fontsize = max(11, size * 0.82)
        page.insert_text(
            point,
            text,
            fontfile=fontfile,
            fontsize=fontsize,
            color=(0, 0.384, 0.608),
        )

    OUT_PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    doc.save(OUT_DOCS, garbage=4, deflate=True)
    shutil.copy2(OUT_DOCS, OUT_PUBLIC)
    doc.close()
    print(f"Wrote {OUT_DOCS}")
    print(f"Wrote {OUT_PUBLIC}")


if __name__ == "__main__":
    main()

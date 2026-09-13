import os

PROJECT_FOLDER = "."
OUTPUT_FILE = "file_tree.txt"

# فولدرات هنستبعدها تماماً (نص وحجم ضخم جداً وملهاش لازمة)
IGNORE_FOLDERS = ["node_modules", ".next", ".git", "__pycache__", ".vscode"]


def build_tree(folder, output_file):
    lines = []

    for root, dirs, files in os.walk(folder):
        # استبعاد الفولدرات غير المرغوبة
        dirs[:] = [d for d in dirs if d not in IGNORE_FOLDERS]

        for name in sorted(dirs):
            full_path = os.path.join(root, name)
            lines.append(f'"{os.path.abspath(full_path)}"')

        for name in sorted(files):
            full_path = os.path.join(root, name)
            lines.append(f'"{os.path.abspath(full_path)}"')

    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"✅ تم! عدد العناصر: {len(lines)}")
    print(f"📝 الملف موجود في: {output_file}")


if __name__ == "__main__":
    build_tree(PROJECT_FOLDER, OUTPUT_FILE)
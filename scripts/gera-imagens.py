#!/usr/bin/env python3
"""Gera as versões otimizadas do avatar a partir da imagem original.

Fonte: app/assets/images/pedro_nascimento.jpeg (2048x2048).
Rode de novo sempre que trocar a imagem original:

    python3 scripts/gera-imagens.py

Depende só do Pillow (pip install pillow).
"""

from pathlib import Path

from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIGINAL = RAIZ / "app/assets/images/pedro_nascimento.jpeg"

# (destino, lado em px, formato, opções do encoder)
SAIDAS = [
    # avatar da página: exibido em 260px, gerado em 2x para telas de alta densidade
    (RAIZ / "app/assets/images/avatar.webp", 520, "WEBP", {"quality": 82, "method": 6}),
    # imagem de compartilhamento (og:image); JPEG por compatibilidade com os crawlers
    (RAIZ / "public/og-image.jpg", 1024, "JPEG", {"quality": 82, "optimize": True, "progressive": True}),
    # ícone de atalho do iOS
    (RAIZ / "public/apple-touch-icon.png", 180, "PNG", {"optimize": True}),
]


def main() -> None:
    with Image.open(ORIGINAL) as original:
        imagem = original.convert("RGB")

    for destino, lado, formato, opcoes in SAIDAS:
        reduzida = imagem.resize((lado, lado), Image.Resampling.LANCZOS)
        reduzida.save(destino, formato, **opcoes)
        print(f"{destino.relative_to(RAIZ)}: {lado}x{lado}, {destino.stat().st_size / 1024:.1f} KiB")


if __name__ == "__main__":
    main()

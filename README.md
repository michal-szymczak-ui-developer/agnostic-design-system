# agnostic-design-system
Design System - build preview deploy

Flow:
Opisuję komponent → AI generuje Figmę i kod → ja oceniam jakość i spójność.
AI wie jak budowac Figme - znad Design system - Tokeny, zna reguly.

Dostarczam Lo-Fi szkic / Screenshot → AI buduje Design  → Kod  → Weryfikacja


Rola: Design Engineer

Obszary:

AI-ready design systems: dokumentacja i struktura systemu tak, żeby modele potrafiły z niego poprawnie korzystać (opisy komponentów, reguły użycia, MCP, pliki typu CLAUDE.md z zasadami systemu). To moim zdaniem jedna z najszybciej rosnących nisz.

Design tokeny i architektura systemu: tokeny jako jedno źródło prawdy dla Figmy i kodu (Style Dictionary, Tokens Studio, zmienne w Figmie), wersjonowanie, governance.

Komponenty w kodzie: React/Web Components, Storybook, testy wizualne i regresyjne.
Accessibility jako domyślny standard
Motion i interakcje: animacje, micro-interactions, wydajność renderowania.

Prototypowanie z AI: szybkie budowanie działających prototypów zamiast makiet statycznych, współpraca z agentami kodującymi.

Frontend performance i Core Web Vitals: wpływ decyzji projektowych na wydajność.
Content design i UX writing: AI zmienia tu dużo, a mikrotekst jest częścią interfejsu.
Analityka i eksperymenty: A/B testy, mierzenie, czy komponenty faktycznie poprawiają konwersję lub użyteczność.
Interfejsy AI: projektowanie dla streamingu, niepewności, błędów modelu, promptów jako UI. To nowa dziedzina z własnymi wzorcami.
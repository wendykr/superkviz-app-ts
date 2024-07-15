# Projekt Superkvíz
Kvízová aplikace s výběrem odpovědí na sadu otázek.

- [Zadání](#zadání)
- [Abstrakt](#abstrakt)
- [Rozsah a realizace](#rozsah-a-realizace)
- [Ukázka](#ukázka)

## Zadání
Dle předem [připraveného](https://github.com/Czechitas-React-podklady/Projekt-Superkviz) statického HTML a CSS návrhu naprogramovat aplikaci s dynamickým obsahem v Reactu.


## Abstrakt
Po zvolení kategorie se uživateli postupně ukazují otázky. U každé otázky má na výběr z několika možných odpovědí. Kliknutí na odpověď, se posune na další otázku.  
Jakmile uživatel odpoví na všechny otázky, zobrazí se stránka s vyhodnocení úspěšnosti v procentech a seznamem s výsledkem.  
V seznamu je vždy otázka a odpověď uživatele. V případě špatné odpovědi se pod ní zobrazí správná odpověď.  
Proti původnímu zadání jsem kromě Reactu přidala prvky TypeScriptu.  
Data nenačítám z API, ale ze supabase databáze.  
Design jsem upravila na responsivní verzi.  


## Rozsah a realizace
Stručný výčet znalostí, které jsem využila. **Uvádím znalosti týkající se Reactu, které jsem využila v kombinaci s TypeScriptem. HTML/CSS považuji jako samozřejmost.**

- rozdělení aplikace na menší celky do *komponent*
- práce s *useState* a událostí *onClick*
- *useEffect* se závislostmi
- *vlastní Hook* (`useQuestions`) ke znovu použití stavové logiky mezi komponentami
- *komunikace mezi komponentami* (`parent` <-> `child`)
- více stránková aplikace pomocí *React Router*
- rozšíření `interface` přes klíčové slovo *extends*


## Ukázka
![ukázka Superkvízu](ukazka/superkviz-ukazka.jpg)

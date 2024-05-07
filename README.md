# INVO Academy - Spotify user feedback modal

Projekt popup-u z oceną użytkownika w serwisie Spotify.

## Opis

Odwzorowanie designu z [pliku Figmy](https://www.figma.com/file/fekk49ThHnKDVMVxZBDwMo/Design?type=design&node-id=0%3A1&mode=design&t=GeJxdfG5zgQrHni8-1) oraz poprawne zaprogramowanie reguł RWD.

## Demo

Demo aplikacji dostępne [tutaj](https://fastidious-beignet-3e4bec.netlify.app/).

## Funkcjonalności

- **RWD:** Projekt skaluje się odpowiednio na różnych urządzeniach, według wymiarów z Figmy.
- **Wybór tylko jednej oceny:** Gdy użytkownik wybiera ocenę, tylko jedna powinna być wybrana, a wszystkie pozostałe powinny się odznaczyć.
- **Wyświetlanie raz na 3 dni:** Po zamknięciu okna z oceną, czas zamknięcia jest zapisywany, aby zapobiec wyświetlaniu komunikatu przed upływem 3 dni.
- **Przycisk aktywny po wyborze oceny:** Przycisk do kolejnej akcji jest aktywny wyłącznie po wybraniu oceny przez użytkownika.
- **Zabezpieczenie logiki:** Gdy użytkownik kliknie przycisk do kolejnej akcji, wprowadzono zabezpieczenie, które sprawia, że można to zrobić maksymalnie jeden raz.

## Technologie

- HTML
- CSS
- SASS
- JS
- [sweetalert2](https://sweetalert2.github.io/)

## Autor

- Oskar Rygasiewicz
- INVO Academy (starter code)





# BRIGHT SAT

SAT inglizcha so'zlarini o'rganish uchun bitta sahifali web-ilova. Interfeys va ta'riflar o'zbekcha, so'zlarning o'zi inglizcha.

## Fayllar
- `index.html` — sahifa tuzilmasi
- `style.css` — dizayn, ranglar, animatsiyalar
- `script.js` — so'zlar ro'yxati va butun mantiq
- `vercel.json` — Vercel sozlamasi

Build yoki o'rnatish kerak emas: fayllarni brauzerda ochish yoki Vercel'ga yuklash kifoya.

## Bo'limlar
- **Bosh sahifa** — 10 ta oraliq (1–6, 7–12 … 55–60), har birida 6 ta so'z. Oraliqni tanlang, so'zlarni ko'ring va o'rganishni boshlang.
- **Mashq** — uch rejim:
  - *Juftlash*: so'zni ma'nosi bilan juftlang.
  - *Eslash*: ta'rifga qarab inglizcha so'zni yozing.
  - *Kontekstda*: gapdagi bo'sh joyga mos so'zni tanlang (javobdan keyin gapning tarjimasi chiqadi).
- **So'zlar** — 60 ta so'zning to'liq ro'yxati va qidiruv.
- **Natijalar** — o'rganilgan so'zlar va oraliqlar bo'yicha holat.
- **Tungi rejim** tugmasi yuqorida.

## Qoidalar
- So'z 3 marta to'g'ri topilsa, "o'rganilgan" bo'ladi.
- Natijalar faqat shu brauzerda (`localStorage`) saqlanadi.
- Animatsiyani o'chirgan foydalanuvchilarda animatsiya ishlamaydi.

## So'z qo'shish
`script.js` boshidagi `PACKS` ro'yxatida har bir paket 6 ta so'zdan iborat. Yangi so'z:

```js
["word", "turi", "o'zbekcha ta'rif", "English sentence with ___", "Gapning o'zbekcha tarjimasi"]
```
Yangi paket qo'shsangiz, oraliq nomlari (11–16 va h.k.) avtomatik hisoblanadi.

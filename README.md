# Public deployment repo

## 🔒 Firestore Security Rules

Users can only read/write their own data:

```
/students/{uid}           → auth.uid == uid
/scores/{uid}/trials/{*} → auth.uid == uid
```

---

## 🧮 Math Engine Rules

- Number₁ is always positive
- Subsequent numbers are randomly + or −
- **Boundary condition:** if `CurrentTotal − NextVal < 0`, operator is forced to `+`
- Total never goes negative at any step
- Difficulty controls digit count and number of terms:
  - Easy: 1-digit numbers, 3 terms
  - Medium: 2-digit numbers, 5 terms
  - Hard: 2-digit numbers, 7 terms
  - Custom: 
---

## 📊 Firestore Schema

```
students/{uid}
  name: string    (name provided by Google Authentication)
  email: string   (email provided by Google Authentication)
  age: number     (age of user using the website)
  consentGiven:      (whether privacy policy is read and consent given) users not allowed to login if false 
  consentTimestamp:     (local time stamp of consent)
  consentVersion:   (privacy policy version changes)
  createdAt: timestamp   (firebase server timestamp of accepting privacy notice)

scores/{uid}/trials/{trialId}
  count: number          (how many numbers were shown)
  digits: number         (max digits per number)
  isCorrect: boolean
  userAnswer: number
  actualAnswer: number
  duration: number       (seconds)
  timestamp: timestamp
  numbers: space separate string of numbers with sign ("+17 +81 +68 -89 -26 +59 +27 +2")

```

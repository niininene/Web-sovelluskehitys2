## Group Activities

> Work in group to solve these tasks.

## Task 1

- Inside the `src` folder:
  - Run `npm install`
  - Run `npm run dev`
  - Visit this address `http://localhost:4000/api/workouts/`
- Use POSTMAN to test the endpoints:
  - Alternatively, you can use `REST VS code extension`
  - Examples:

```http
GET http://localhost:4000/api/workouts
```

```http
POST http://localhost:4000/api/workouts
{
    "title":"Workout 1",
    "reps":40,
    "load":10
}
```

## Task 2

- What is MVC?
Model–view–controller (MVC) is a software architectural pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements.
- Does the code in the `src` folder follow the MVC pattern?
Yes, I think so.
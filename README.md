# Learning Day 06/24/2022 Activity
## Fuzzy Search + Typescript Practice

**Goals**
 * Become more familiar with TypeScript
 * Create a single search function using [Fuzzy Search](https://github.com/hellojoshuatonga/react-use-fuzzy) that can be implemented across an app using different datasets and search keys.
 

The `Search` component, recieves **3** arguments: `data`, `searchKeys`, and `setSearchResult`.

In this application, the `Search` component is used once, and provides data based on the `currentOption` variable. 

The `currentOption` variable dictates what `data`, `searchkeys`, and `setSearchResult` function is utilized by the `Search` component.
 
 ```
const OBJECT_OPTIONS = [
    {
      id: "cake",
      data: CAKE_JSONDATA,
      label: "Cake 🎂",
      searchKeys: ["name", "type", "batters.batter.type", "topping.type"],
    },
    {
      id: "people",
      data: PEOPLE_JSONDATA,
      label: "People 🧍",
      searchKeys: [
        "name.first",
        "name.last",
        "name.title",
        "location.street.number",
        "location.street.name",
        "location.city",
        "location.country",
        "location.postcode"
      ],
    },
  ];
 ``` 
The specified `searchKeys` can be seen here.


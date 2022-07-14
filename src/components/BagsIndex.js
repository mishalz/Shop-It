import Index from "./Index";
import classes from "./BagsIndex.module.css";
const BagsIndex = () => {
  const Bags = [
    {
      id: "212018",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      articleName: "Verdana",
      type: "shoulder bag",
      price: 300,
    },
    {
      id: "212019",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80",
      articleName: "Nessa",
      type: "shoulder bag",
      price: 300,
    },
    {
      id: "2120123",
      image:
        "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Hermano",
      type: "shoulder bag",
      price: 300,
    },
    {
      id: "212017",
      image:
        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Lucci",
      type: "clutch",
      price: 300,
    },
    {
      id: "212012",
      image:
        "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Landet",
      type: "cross body bag",
      price: 300,
    },
    {
      id: "2120101",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      articleName: "Verdana",
      type: "shoulder bag",
      price: 300,
    },
    {
      id: "2120121",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80",
      articleName: "Nessa",
      type: "shoulder bag",
      price: 300,
    },
    {
      id: "212012332",
      image:
        "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Hermano",
      type: "shoulder bag",
      price: 300,
    },
    {
      id: "212013123",
      image:
        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Lucci",
      type: "clutch",
      price: 300,
    },
    {
      id: "212013213",
      image:
        "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Landet",
      type: "cross body bag",
      price: 300,
    },
  ];
  return <Index className={classes.BagsIndex} items={Bags} />;
};

export default BagsIndex;

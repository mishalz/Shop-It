import Index from "./Index";
import classes from "./DressesIndex.module.css";
const DressesIndex = () => {
  const Dresses = [
    {
      id: "212018",
      image:
        "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Sorrte",
      type: "maxi",
      price: 200,
    },
    {
      id: "212019",
      image:
        "https://images.unsplash.com/photo-1596783047904-4000addd05cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Rallit",
      type: "short dress",
      price: 340,
    },
    {
      id: "2120123",
      image:
        "https://images.unsplash.com/photo-1615584046840-11cbf13c0238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Inseq",
      type: "maxi",
      price: 440,
    },
    {
      id: "212017",
      image:
        "https://images.unsplash.com/photo-1632262049811-86d23941618b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      articleName: "Landana",
      type: "maxi",
      price: 230,
    },
    {
      id: "212012",
      image:
        "https://images.unsplash.com/photo-1631233999975-3d559f0526e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      articleName: "Roste",
      type: "short dress",
      price: 420,
    },
    {
      id: "212014234",
      image:
        "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Sorrte",
      type: "maxi",
      price: 200,
    },
    {
      id: "21201943",
      image:
        "https://images.unsplash.com/photo-1596783047904-4000addd05cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Rallit",
      type: "short dress",
      price: 340,
    },
    {
      id: "21201234323",
      image:
        "https://images.unsplash.com/photo-1615584046840-11cbf13c0238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      articleName: "Inseq",
      type: "maxi",
      price: 440,
    },
    {
      id: "212017234234",
      image:
        "https://images.unsplash.com/photo-1632262049811-86d23941618b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      articleName: "Landana",
      type: "maxi",
      price: 230,
    },
    {
      id: "21201122",
      image:
        "https://images.unsplash.com/photo-1631233999975-3d559f0526e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      articleName: "Roste",
      type: "short dress",
      price: 420,
    },
  ];
  return <Index className={classes.DressesIndex} items={Dresses} />;
};

export default DressesIndex;

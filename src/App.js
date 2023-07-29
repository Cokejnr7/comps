import Accordion from "./components/Accordion";

const App = () => {
  const accordion = [
    {
      id: "lkj5",
      title: "Why study javascript?",
      content: `JavaScript is an excellent tool for beginning programmers who want to expand their skill set into other languages.
        JavaScript supports valuable skills such as object-oriented, functional,
        and imperative styles of programming.`,
    },
    {
      id: "lk35",
      title: "What is React?",
      content:
        "React is a Javacript Library used to build beautiful UI design with the concept of reusable components, events and state management",
    },
    {
      id: "lk49",
      title: "Why study python?",
      content: `Python is used in a wide range of fields including web development,
        data science, machine learning, artificial intelligence, scientific computing, and more.
        Recently its impact has really been felt in the fields of AI and ML,
         making it a high demand skill to have.`,
    },
  ];

  return (
    <div className="app">
      <Accordion items={accordion} />
    </div>
  );
};

export default App;

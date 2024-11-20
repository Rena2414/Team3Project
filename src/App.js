import "./App.css";
import Header from "./components/Header";
import MykhailoProfile from "./components/MykhailoProfile";

// Короче, створюєте в папці components файл з назвою Ім'яProfile.js, код можете взяти з мене (MykhailoProfile.js), тоді мінєте 
// основні параметри, фото для ави завантажуєте в папку public, має бути кругла пнгшка, я юзав цей сайт для обрізання - https://crop-circle.imageonline.co/
// тоді зверху цього файлу(App.js) вставляєте import ім'яProfile from "./components/ім'яProfile";
// і основне, знизу в App() треба вставити <ім'яProfile />


function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
      <MykhailoProfile />
      </div>
    </div>
  );
}

export default App;
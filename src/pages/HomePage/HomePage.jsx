import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.text}>
        Phone Book is a modern application that will help you easily organize
        and store all your contacts in one place. Thanks to the intuitive
        interface, you can quickly add, edit and delete contacts.
      </h2>
      <img
        className={s.img_home}
        src="https://cdn.pixabay.com/photo/2014/04/03/10/28/telephone-310544_1280.png"
        alt="phone"
      />
    </div>
  );
};
export default HomePage;

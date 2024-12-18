const Contacts = () => {
    return (
        <div className="contacts-section container">
            <h2>Свяжитесь с нами</h2>
            <p>Телефон: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Email: <a href="mailto:info@zoomagazin.ru">info@zoomagazin.ru</a></p>
            <p>Адрес: г. Москва, ул. Врубеля д. 10</p>
            <h2>Форма обратной связи</h2>
            <form className="contact-form" action="#" method="post">
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Сообщение:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default Contacts;
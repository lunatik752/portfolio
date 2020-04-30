import React from 'react';
import styles from './Contacts.module.css';
import SectionTitle from "../SectionTitle/SectionTitle";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                    <SectionTitle sectionTitle={'Контакты'}/>
                    <form className={styles.contactsForm}>
                        <input  placeholder="Name"  type="text"/>
                        <input placeholder="E-mail" type="text"/>
                        <textarea placeholder="Your message">
                        </textarea>
                    </form>
                <div className={styles.contactsButton}>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;

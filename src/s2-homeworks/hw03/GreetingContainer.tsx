import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    const newName = name.trim()
    if (newName === '') {
			setError('Ошибка! Введите имя!');
		} else {
			addUserCallback(newName);
			setName('');
		}
}

export const pureOnBlur = (name: string, setError: (name: string)=>void) => { // если имя пустое - показать ошибку
    const newName = name.trim();
    if (newName === '') {
			setError('Ошибка! Введите имя!');
		}
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
	// если нажата кнопка Enter - добавить
	// debugger
	if (e.key === 'Enter') {
		addUser();
	}
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
			// need to fix any
			setName(e.currentTarget.value); // need to fix

			error && setError('');
		};
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
			pureOnEnter(e, addUser);
		};

    // const totalUsers = <ul>{users.map(u => <li key={u._id}>{u.name}</li>)}</ul>;
    const totalUsers = users.length;

    const lastUserName = users.length ? users[users.length - 1].name : ''

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

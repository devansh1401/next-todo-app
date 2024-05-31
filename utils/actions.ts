'use server'
import db from './db'

export const NewTodos = async (content) => {
    const todo = await db.todo.create({
        data: {
            content: content,
        },
    })
}
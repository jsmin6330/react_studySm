export const todoReducer = (tasks, actions) => {
    switch(actions.type){
        case 'add': {
            return [
                ...tasks, 
                {
                    id: actions.id,
                    text: actions.text,
                    done: false
                }
            ]
        }
        case 'change': {
            return tasks.map((t) => (t.id === actions.task.id ? actions.task : t));
        }

        case 'delete': {
            return tasks.filter((t) => t.id !== actions.id);
        }
    }
}
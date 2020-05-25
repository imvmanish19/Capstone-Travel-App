import {handleEventFunction} from './js/countdownapp';
import {boxHandler} from './js/app';

import './styles/base.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/response.scss';
import './styles/result.scss';

const eventHandling = document.getElementById('mainform').addEventListener('submit', (event) => {
    event.preventDefault();
    handleEventFunction();
});

document.getElementById('mainform').addEventListener('submit',(e) => {
    e.preventDefault();
    boxHandler();
})

export {
    handleEventFunction,
    boxHandler
}
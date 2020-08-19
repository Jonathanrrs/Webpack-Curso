import {showAlert} from './messages';
import $ from 'jquery';
/* Para generar ids */
import { v4 as uuidv4 } from 'uuid';
/* Debemos agregar un loader para files css */
import './styles.scss';
document.getElementById("btn-alert")
    .addEventListener("click", showAlert);

    $('#btn-jq').click(()=> {
        alert(uuidv4())
    })
import{clientes} from '../model/clientes.js'

function listarClientesActivos() {

}


function listarClientesInactivos() {

}

function listarClientesPendientes() {

}

function listarClientes(){
    clientes.map((clientes)=>{

        let clienteCard = document.createElement("div");
        clienteCard.classList.add("cliente-card");
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        let avatar = document.createElement("div");
        avatar.classList.add("avatar");
        let badge = document.createElement("div");
        badge.classList.add("badge");
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let clienteNombre = document.createElement("div");
        clienteNombre.classList.add("cliente-nombre");
        let clienteEmpresa = document.createElement("div");
        clienteEmpresa.classList.add("cliente-empresa");
        let clienteInfo = document.createElement("div");
        clienteInfo.classList.add("cliente-info");
        let infoItem = document.createElement("div");
        infoItem.classList.add("info-item");
        let infoIcons = document.createElement("div");
        infoIcons.classList.add("info-icons");
        let infoText = document.createElement("div");
        infoText.classList.add("info-text");
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        let btnDetalle  = document.createElement("button");
        btnDetalle.classList.add("btn", "btn-primary");
        let btnContacto  = document.createElement("button");
        btnContacto.classList.add("btn", "btn-secondary");

        cardHeader.append(avatar,badge);
        infoItem.append(infoIcons,infoText);
        clienteInfo.append(infoItem);
        cardFooter.append(btnDetalle,btnContacto);
        cardBody.append(clienteNombre,clienteEmpresa,clienteInfo);
        clienteCard.append(cardHeader,cardBody,cardFooter);
        

        document.getElementById("clientes-grid").append(clienteCard);
    })
}

let listadoClientes = document.getElementById("listarClientes");
listadoClientes.addEventListener("click", listarClientes);
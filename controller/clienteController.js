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
        let cardHeader = document.createElement("div");
        let avatar = document.createElement("div");
        let badge = document.createElement("div");
        let cardBody = document.createElement("div");
        let clienteNombre = document.createElement("div");
        let clienteEmpresa = document.createElement("div");
        let clienteInfo = document.createElement("div");
        let infoItem = document.createElement("div");
        let infoIcons = document.createElement("div");
        let infoText = document.createElement("div");
        let cardFooter = document.createElement("div");
        let btnDetalle  = document.createElement("button");
        let btnContacto  = document.createElement("button");
        cardHeader.append(avatar,badge);
        infoItem.append(infoIcons,infoText);
        clienteInfo.append(infoItem);
        cardFooter.append(btnDetalle,btnContacto);
        cardBody.append(clienteNombre,clienteEmpresa,clienteInfo);
        clienteCard.append(cardHeader,cardBody,cardFooter);
        

        document.getElementById("clientes-grid")
    })
}

let listadoClientes = document.getElementById("listarClientes");
listadoClientes.addEventListener("click", listarClientes);
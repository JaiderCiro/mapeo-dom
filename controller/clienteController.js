import{clientes} from '../model/clientes.js'

function listarClientesActivos() {

}


function listarClientesInactivos() {

}

function listarClientesPendientes() {

}

function listarClientes(){
    clientes.map((cliente)=>{

        let clienteCard = document.createElement("div");
        clienteCard.classList.add("cliente-card");
        
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        
        let avatar = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.textContent = cliente.nombre.split(" ").map((palabra)=> palabra[0]).join("")
            .split(" ")
            .map((palabra)=> palabra [0])
            .join("");
        let badge = document.createElement("span");
        badge.classList.add("badge");
        badge.textContent = cliente.estado

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        let clienteNombre = document.createElement("div");
        clienteNombre.classList.add("cliente-nombre");
        clienteNombre.textContent = cliente.nombre;
        
        let clienteEmpresa = document.createElement("div");
        clienteEmpresa.classList.add("cliente-empresa");
        clienteEmpresa.textContent =cliente.empresa;
        
        let clienteInfo = document.createElement("div");
        clienteInfo.classList.add("cliente-info");
       

        const datosContacto = [
            { icono: "📧", texto: cliente.email},
            { icono: "📱", texto: cliente.telefono || "+1 (555) 000-0000"},
            { icono: "🏙️", texto: 'Desde: ${cliente.fecha || "01/01/2024"}'},
        ];

        datosContacto.forEach((dato) => {
            let infoItem = document.createElement("div");
            infoItem.classList.add("info-item");

            let infoIcons = document.createElement("span");
            infoIcons.classList.add("info-icons");
            infoIcons.textContent = dato.icono;

            let infoText = document.createElement("span");
            infoText.classList.add("info-text");
            infoText.textContent = dato.texto;

            infoItem.append(infoIcons, infoText);
            clienteInfo.append(infoItem);
        });

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
            
        let btnDetalle  = document.createElement("button");
        btnDetalle.classList.add("btn", "btn-primary");
        btnDetalle.textContent = "Ver Detalles";
            
        let btnContacto  = document.createElement("button");
        btnContacto.classList.add("btn", "btn-secondary");
        btnContacto.textContent = "Contactar"
       
        cardHeader.append(avatar,badge);
        cardFooter.append(btnDetalle,btnContacto);
        cardBody.append(clienteNombre,clienteEmpresa,clienteInfo);
        clienteCard.append(cardHeader,cardBody,cardFooter);
        

        document.getElementById("clientes-grid").append(clienteCard);
    })
}

let listadoClientes = document.getElementById("listarClientes");
listadoClientes.addEventListener("click", listarClientes);
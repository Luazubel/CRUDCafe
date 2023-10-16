import {Form, Button, Container} from "react-bootstrap"
import {useForm} from "react-hook-form";
import { crearProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CrearProducto = () => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm()

    //inicializo useNavigate
    const navegacion =useNavigate();

    const onSubmit = (data)=>{
          console.log(data)
          //enviar la peticion a la API
          crearProductoAPI(data).then((respuesta)=>{
            if(respuesta.status===201){
              Swal.fire("Producto creado", "El producto fue correctamente creado", "success")
              //aqui quiero resetear el formulario
              reset();
              navegacion("/administrar");
            }else{
              Swal.fire("Ocurrio un error", "Intente esta operacion en unos minutos", "error")
            }
          })
    }

    return (
        <Container className="mainSection">
        <section>
            <h3 className="display-4">Nuevo Producto</h3>
            <hr />
        </section>
        <section className="container my-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ej: Cafe" 
            {...register("nombreProducto", {required:"El nombre del producto es un dato obligatorio", minLength:{value:2, message: "La cantidad minima de caracteres es 2"}, maxLength:{value:100, message: "La cantidad minima de caracteres es 100"}})}         />
            <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Ej: $500" {...register("precio", {required: "El precio es un valor obligatorio", min:{value: 1, message: "El precio minimo debe ser de $1"}, max:{value:10000, message:"el precio maximo debe ser de $10000"}})}       />
            <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="https://..."  
            {...register("imagen", {required: "La URL de la imagen es obligatoria",
             pattern:{value:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
              message:"Debe ingresar una URL valida"}})}        />
            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Select aria-label="Default selec example" {...register("categoria", {
            required:"Debe seleccionar una categoria"
          })}>
            <option value="">Selecione una opcion</option>
            <option value="bebida caliente">Bebida Caliente</option>
            <option value="bebida fria">Bebida Fria</option>
            <option value="dulce">Dulces</option>
            <option value="salado">Salados</option>
          </Form.Select>
            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
      <Button type="submit" variant="primary">Guardar</Button>
    </Form>
        </section>
        </Container>
    );
};

export default CrearProducto;
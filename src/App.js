import "./App.css";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { FullscreenExit } from "@mui/icons-material";
import { useState } from "react";

const Root = styled("div")(({ theme }) => ({
  "& .textField": {
    backgroundColor: "yellow",
    color: "blue",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "10px",
    padding: "30px",
    justifyContent: "center",
    borderRadius: "30px",
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "red",
  },
  "& .tf": {
    padding: "10px",
  },
}));

function App() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const [helpertext, setHelpertext] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onChangeText = (e) => {
    setForm(e.target.value);
  };

  const validarCampos = () => {
    if (
      form.name === "" ||
      form.lastname === "" ||
      form.phone === "" ||
      form.name === ""
    ) {
      alert("Debes llenar todos los campos");
      setError(true);
      setHelpertext(true);
    } else {
      alert("Se han enviado tus datos");
      setError(false);
      setHelpertext(false);
    }
  };

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Root>
        <div className="textField">
          <TextField
            type="text"
            error={error}
            helperText={helpertext === true ? "Llene este campo" : false}
            onChange={onChangeText}
            value={form.name}
            className="tf"
            id="outlined-basic"
            label=" nombre"
            variant="outlined"
          />
          <TextField
            error={error}
            helperText={helpertext === true ? "Llene este campo" : false}
            type="text"
            onChange={onChangeText}
            value={form.lastname}
            className="tf"
            id="outlined-basic"
            label="apellido"
            variant="outlined"
          />
          <TextField
            error={error}
            helperText={helpertext === true ? "Llene este campo" : false}
            type="number"
            onChange={onChangeText}
            value={form.phone}
            className="tf"
            id="outlined-basic"
            label="telefono"
            variant="outlined"
          />
          <TextField
            error={error}
            helperText={helpertext === true ? "Llene este campo" : false}
            type="email"
            onChange={onChangeText}
            value={form.email}
            className="tf"
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button
            onClick={validarCampos}
            variant="contained" /*</div>disabled={textField1 === "" || textField2 === "" || textField3 === "" || textField4 === "" ? true : false}*/
          >
            enviar
          </Button>
          <Button onClick={handleClickOpen} variant="outlined">
            terminos y condiciones
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alertDiagolTitle">
              {"leandro ahí esta ese pinche modal"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alertContentText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>cerrar</Button>
              <Button onClick={handleClose}>guardar</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Root>
    </div>
  );
}

export default App;

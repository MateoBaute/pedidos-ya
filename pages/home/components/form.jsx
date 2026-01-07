export default function Form() {
    return (
      <div className="form">
        <h1>Form</h1>
  
        <form>
          <div className="field">
            <input type="text" placeholder=" " id="name" />
            <label htmlFor="name">Nombre</label>
          </div>
  
          <div className="field">
            <input type="number" placeholder=" " id="numbre" />
            <label htmlFor="number">Número de Teléfono</label>
          </div>
  
          <div className="field">
            <input type="password" placeholder=" " id="password" />
            <label htmlFor="password">Password</label>
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
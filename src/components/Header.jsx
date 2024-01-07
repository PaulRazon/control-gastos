
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({setGastos,gastos,presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificaor de Gastos</h1>
        {isValidPresupuesto ?(
          <ControlPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        ):(
          <NuevoPresupuesto
          presupuesto= {presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
        
    </header>
  )
}

export default Header

import { FormEvent, useEffect, useRef, useState } from "react"

export const SearchBox = ({handleSearch}:{
    handleSearch:(e:FormEvent<HTMLFormElement>, CYTY:string)=>void
}) =>{

    const [search, setSearch] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)//getElementById

const handleChange = (e:FormEvent) =>{
    const {value} = e.target as HTMLInputElement;
    setSearch(value)
}

useEffect(()=>{
inputRef.current!.focus();
},[])

    return(

        <form 
        id="form"
        onSubmit={(e)=>{
            handleSearch(e,search);
            setSearch("")
        }}
        >
            <label htmlFor="search"></label>
            <input
            ref={inputRef}
             className="flex ml-48 items-center " 
            autoComplete="off"
            id="search" name="search"
            type="text" placeholder="Buscar ubicacion....."
            onChange={handleChange}
            
            />
        </form>
       
    )
}

//className="flex ml-48 items-center " 
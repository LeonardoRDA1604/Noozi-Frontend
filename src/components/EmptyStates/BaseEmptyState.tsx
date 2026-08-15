

export function BaseEmptyState({children} : { children : React.ReactNode}){
    
    return(
    <>
        <div className="flex flex-col items-center gap-5 py-10 select-none">
            {children}
        </div>
    </> 
    )
}
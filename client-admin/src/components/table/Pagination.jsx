import Button from "../Button";

export default function Pagination({prevHandler, nextHandler, currentPage=0, totalPage=0}) {
  return (
    <div className="flex gap-2 items-center">
        <Button color='primary' className='p-2' onClick={prevHandler}>Prev</Button>
        <p className="p-2 border rounded-md text-slate-500">{currentPage} of {totalPage}</p>
        <Button color='primary' className='p-2' onClick={nextHandler}>Next</Button>
    </div>
  )
}

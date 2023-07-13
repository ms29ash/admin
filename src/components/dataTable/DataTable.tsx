import { DataGrid, GridColDef,GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import "./dataTable.scss"
import { Link } from 'react-router-dom';


type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
  };
  
export default function DataTable({rows,columns,slug}: Props) {


const handleDelete = (id:number)=>{
//delete 
console.log(id);
}

    const actionColumn :GridColDef ={
        field:"aciton",
        headerName:"Actions",
        width:200,
        renderCell:(params)=>{
            return(

                <div className="action">
                <Link to={`/${slug}/${params.row.id}`} >
                <img src="/view.svg" alt=""/>
                </Link>
                <div className="delete" onClick={() => handleDelete(params.row.id)}>
                <img src="/delete.svg" alt=""/>
                </div>
            </div>
                )
        }
    }
  

  return (
    <div className="dataTable" >
           <DataGrid className='dataGrid'
        rows={rows}
        columns={[...columns,actionColumn]}
        editMode='row'
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}

        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

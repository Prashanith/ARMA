import { ChangeEvent, useState } from "react";
import { Dialog } from "../../Components/Dialog/Dialog";
import { InputField } from "../../Components/InputField/InputField";
import Select from "react-select";
import { containerCSS } from "react-select/dist/declarations/src/components/containers";
import { Close } from "@material-ui/icons";


export const AddRoles = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string>();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState<string>("");

  const options = [
    { value: "Create ", label: "Create" },
    { value: "Edit ", label: "Edit" },
    { value: "Delete", label: "Delete" },
  ];
  
   const [selectRoles, setSelectRoles] = useState<(string | undefined) []>([])



  const validateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name);
    if (name.length === 0) {
      setNameError("Name field is empty");
    } 
    else {
        setNameError("");
      }
    
  };

  
  const loginValidate = () => {
    if (
      name.length === 0 ||
      nameError?.length !== 0 
    ) {
      setShowError("Fill details appropriately");
    } else {
      setShow(true);
      setShowError("");
    }
  };

  return (
    <div className="flex flex-col grow items-center">
      <div className="mt-12 w-max">
        <p className="text-center lg:text-left text-arma-title text-2xl font-medium mb-12 ml-2 ">
          ADD ROLE
        </p>

        <div className=" flex flex-col gap-y-6 mb-6  md:flex-row sm:gap-x-8">
          <InputField
            name="Name"
            type="text"
            error={nameError}
            onChange={(e) => {
              validateName(e);
            }}
          />
        </div>

        <div className=" flex flex-col gap-y-6 mb-6  md:flex-row sm:gap-x-8">
          <Select
            name="Roles"
            placeholder="Roles"
            value ={{value: "Roles", label: "Roles"}}
            options={options}
            onChange={(e) => {
                for(let i = 0; i < selectRoles.length; i++){
                   if(e?.value === selectRoles[i]) return        
                }
                setSelectRoles([...selectRoles, e?.value])
            }}
            styles={{
                control: (base) => ({
                ...base,
                minHeight: 52,
                minWidth: 270,
                borderRadius: "0.5rem",
                border: "2px solid rgb(200, 200, 200)",
                }),

                placeholder: (base) => ({
                  ...base,
                  paddingLeft: '16px'
                }),
                singleValue: (base) => ({
                    ...base,
                    paddingLeft: '16px',
                    color: '#575757e1'
                }) 
            }}
            
            className="basic-multi-select w-full h-full"
           
          /> 
        </div>
         
         <div className="flex flex-col">
             {
                 selectRoles.map((r,i) => {
                     return(
                         <div className="flex justify-between shadow-md px-4 py-2 hover:bg-black/[0.05]">
                             <span>{r}</span>
                             <Close className="cursor-pointer"onClick ={() => {
                                 let temp = [...selectRoles]
                                 temp.splice(i,1)
                                 setSelectRoles(temp)
                             }}/>
                         </div>
                     )
                 })
             }

         </div>


        <Dialog show={show} setShow={setShow} title="Added">
          {" "}
        </Dialog>

        <button
          className="btn  bg-arma-title rounded-[8px] px-6 py-2 mt-12 ml-auto mr-auto flex justify-center"
          onClick={() => {
            loginValidate();
          }}
        >
          ADD
        </button>
        {showError.length !== 0 && (
          <span className="text-red-500 text-sm flex justify-center mt-2">
            {showError}
          </span>
        )}
      </div>
    </div>
  );
};
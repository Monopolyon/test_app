function Chek_Field_Value(value){    
    if(value !== '' && value !== null && value !== undefined){
        return true
    };
    return false;
}

export {Chek_Field_Value};


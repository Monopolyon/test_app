function Chek_Field_Value(value){    
    if(value !== '' && value !== null && value !== undefined && typeof(value) === 'string'){
        return true
    };
    return false;
}

export {Chek_Field_Value};


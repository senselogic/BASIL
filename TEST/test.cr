class SIMPLE
    @uuid : String
    @bool : bool
    @int8 : Int8
    @uint8 : Uint8
    @int16 : Int16
    @uint16 : Uint16
    @int32 : Int32
    @uint32 : Uint32
    @int64 : Int64
    @uint64 : Uint64
    @float32 : Float32
    @float64 : Float64
    @string : String
    @date : String
    @date_time : String
    @blob : String
end

class COMPOUND
    @id : Int32
    @location : String
    @name : Tuple(String,String)
    @name_set : Set(Tuple(String,String))
    @phone_list : List(String)
    @email_set : Set(String)
    @company_map : Hash(String,String)
    @simple_date : String
    @simple_date_map : Hash(Tuple(String,String),String)
    @simple_date_set : Set(String)
    @simple_date_list : List(String)
    @name_set_map : Hash(String,Set(Tuple(String,String)))
    @simple_pointer_array : Array(SIMPLE)
end

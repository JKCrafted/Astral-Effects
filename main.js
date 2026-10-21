function hex_to_rgb(hex)
{
    hex.replaceAll("#","");
    return [parseInt(hex.slice(0,2), 16), parseInt(hex.slice(2,4), 16), parseInt(hex.slice(4,6), 16)];
}


function main(hex_str) {
    colour_data = [];
    
    hex_list = [];

    let input_str = "";

    for (let string_index = 0; string_index < hex_str.length; string_index++)
    {
        if (string_index % 1 == 0)
        {
            if (input_str.length > 0)
            {
                hex_list.push(input_str);
                input_str = "";
            }
        }
        input_str += hex_str[string_index];
    }

    let val = 0;

    while (val+36 < hex_list.length)
    {
        if (hex_list[val] == "3F" && hex_list[val+24] == "3F" && hex_list[val+28] == "3F" && hex_list[val+32] == "3F" && hex_list[val+36] == "3F")
        {
            let rgba = {};
            rgba["r"] = {"pos":val-13,"hex":[hex_list[val-13],hex_list[val-12]]};
            rgba["g"] = {"pos":val-9,"hex":[hex_list[val-9],hex_list[val-8]]};
            rgba["b"] = {"pos":val-5,"hex":[hex_list[val-5],hex_list[val-4]]};
            rgba["a"] = {"pos":val-3,"hex":[hex_list[val-3],hex_list[val-2],hex_list[val-1],hex_list[val]]};
            
            colour_data.push(rgba);
            val += 37;
        
        }
        else val += 1;
    }

    console.log(colour_data);

    for (let colour_index = 0; colour_index < colour_data.length; colour_index++)
    {
        console.log(`Colour No.${colour_index} RGB = ${hex_to_rgb("#"+colour_data[colour_index]["r"]["hex"][0]+colour_data[colour_index]["g"]["hex"][0]+colour_data[colour_index]["b"]["hex"][0])} | Intensity = ${hex_to_rgb("#"+colour_data[colour_index]["r"]["hex"][1]+colour_data[colour_index]["g"]["hex"][1]+colour_data[colour_index]["b"]["hex"][1])}`);
    }

    

}





import copy
file_path = input("File Path (with extension): ")

with open(file_path, 'rb') as fp:
    a = fp.read()
    
    hex_str = ''.join(['{:02X}'.format(b) for b in a])

    target_points = []

    hex_list = []

    input_str = ""

    for string_index in range(len(hex_str)):
        if string_index % 2 == 0:
            if len(input_str) > 0:     
                hex_list.append(input_str)
                input_str = ""
        input_str += hex_str[string_index]

    val = 0

    while (val+36) < len(hex_list):               
        if hex_list[val] == "3F" and hex_list[val+24] == "3F" and hex_list[val+28] == "3F" and hex_list[val+32] == "3F" and hex_list[val+36] == "3F":
            rgba = {}
            rgba["r"] = {"pos":val-13,"hex":[hex_list[val-13],hex_list[val-12]]}
            rgba["g"] = {"pos":val-9,"hex":[hex_list[val-9],hex_list[val-8]]}
            rgba["b"] = {"pos":val-5,"hex":[hex_list[val-5],hex_list[val-4]]}
            rgba["a"] = {"pos":val-3,"hex":[hex_list[val-3],hex_list[val-2],hex_list[val-1],hex_list[val]]}
            
            target_points.append(rgba)
            val +=37
        else: val += 1


    print(target_points)




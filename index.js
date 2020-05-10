$(document).ready(()=>{
        getalldata();
});

let getalldata = () =>{
console.log(" making request")


$.ajax({
    
    type:'GET',
    dataType: 'json',
    url:  'https://api.covid19india.org/state_district_wise.json',   //'https://api.covid19india.org/districts_daily.json',//'https://youtu.be/fEYx8dQr_cQ',
    success : (data)=>
    {
        Z=data.Gujarat.districtData.Ahmedabad.active

        $("#aha").append(data.Gujarat.districtData.Ahmedabad.active);
        $("#ahc").append(data.Gujarat.districtData.Ahmedabad.confirmed);
        $("#ahd").append(data.Gujarat.districtData.Ahmedabad.deceased);
        $("#ahr").append(data.Gujarat.districtData.Ahmedabad.recovered);
        $("#aa").append(data.Gujarat.districtData.Anand.active);
        $("#ac").append(data.Gujarat.districtData.Anand.confirmed);
        $("#ad").append(data.Gujarat.districtData.Anand.deceased);
        $("#ar").append(data.Gujarat.districtData.Anand.recovered);
        $("#ara").append(data.Gujarat.districtData.Aravalli.active);
        $("#arc").append(data.Gujarat.districtData.Aravalli.confirmed);
        $("#ard").append(data.Gujarat.districtData.Aravalli.deceased);
        $("#arr").append(data.Gujarat.districtData.Aravalli.recovered);
        $("#ba").append(data.Gujarat.districtData.Banaskantha.active);
        $("#bc").append(data.Gujarat.districtData.Banaskantha.confirmed);
        $("#bd").append(data.Gujarat.districtData.Banaskantha.deceased);
        $("#br").append(data.Gujarat.districtData.Banaskantha.recovered);
        $("#ka").append(data.Gujarat.districtData.Kutch.active);
        $("#kc").append(data.Gujarat.districtData.Kutch.confirmed);
        $("#kd").append(data.Gujarat.districtData.Kutch.deceased);
        $("#kr").append(data.Gujarat.districtData.Kutch.recovered);
        $("#ma").append(data.Gujarat.districtData.Mehsana.active);
        $("#mc").append(data.Gujarat.districtData.Mehsana.confirmed);
        $("#md").append(data.Gujarat.districtData.Mehsana.deceased);
        $("#mr").append(data.Gujarat.districtData.Mehsana.recovered);
        $("#pa").append(data.Gujarat.districtData.Panchmahal.active);
        $("#pc").append(data.Gujarat.districtData.Panchmahal.confirmed);
        $("#pd").append(data.Gujarat.districtData.Panchmahal.deceased);
        $("#pr").append(data.Gujarat.districtData.Panchmahal.recovered);

        $("#sa").append(data.Gujarat.districtData.Sabarkantha.active);
        $("#sc").append(data.Gujarat.districtData.Sabarkantha.confirmed);
        $("#sd").append(data.Gujarat.districtData.Sabarkantha.deceased);
        $("#sr").append(data.Gujarat.districtData.Sabarkantha.recovered);
        $("#ja").append(data.Gujarat.districtData.Junagadh.active);
        $("#jc").append(data.Gujarat.districtData.Junagadh.confirmed);
        $("#jd").append(data.Gujarat.districtData.Junagadh.deceased);
        $("#jr").append(data.Gujarat.districtData.Junagadh.recovered);
        $("#sua").append(data.Gujarat.districtData.Surat.active);
        $("#suc").append(data.Gujarat.districtData.Surat.confirmed);
        $("#sud").append(data.Gujarat.districtData.Surat.deceased);
        $("#sur").append(data.Gujarat.districtData.Surat.recovered);
        $("#va").append(data.Gujarat.districtData.Vadodara.active);
        $("#vc").append(data.Gujarat.districtData.Vadodara.confirmed);
        $("#vd").append(data.Gujarat.districtData.Vadodara.deceased);
        $("#vr").append(data.Gujarat.districtData.Vadodara.recovered);


        $("#ga").append(data.Gujarat.districtData.Gandhinagar.active);
        $("#gc").append(data.Gujarat.districtData.Gandhinagar.confirmed);
        $("#gd").append(data.Gujarat.districtData.Gandhinagar.deceased);
        $("#gr").append(data.Gujarat.districtData.Gandhinagar.recovered);

        // y=data.Gujarat.districtData.Bharuch.length;
        $("#bha").append(data.Gujarat.districtData.Bharuch.active);
        $("#bhc").append(data.Gujarat.districtData.Bharuch.confirmed);
        $("#bhd").append(data.Gujarat.districtData.Bharuch.deceased);
        $("#bhr").append(data.Gujarat.districtData.Bharuch.recovered);

        // y=data.Gujarat.districtData.Bhavnagar.length;
        $("#bhaa").append(data.Gujarat.districtData.Bhavnagar.active);
        $("#bhac").append(data.Gujarat.districtData.Bhavnagar.confirmed);
        $("#bhad").append(data.Gujarat.districtData.Bhavnagar.deceased);
        $("#bhar").append(data.Gujarat.districtData.Bhavnagar.recovered);

        // y=data.Gujarat.districtData.Botad.length;
        $("#boa").append(data.Gujarat.districtData.Botad.active);
        $("#boc").append(data.Gujarat.districtData.Botad.confirmed);
        $("#bod").append(data.Gujarat.districtData.Botad.deceased);
        $("#bor").append(data.Gujarat.districtData.Botad.recovered);


        $("#da").append(data.Gujarat.districtData.Dahod.active);
        $("#dc").append(data.Gujarat.districtData.Dahod.confirmed);
        $("#dd").append(data.Gujarat.districtData.Dahod.deceased);
        $("#dr").append(data.Gujarat.districtData.Dahod.recovered);

        // y=data.Gujarat.districtData.Dang.length;
        $("#daa").append(data.Gujarat.districtData.Dang.active);
        $("#dac").append(data.Gujarat.districtData.Dang.confirmed);
        $("#dad").append(data.Gujarat.districtData.Dang.deceased);
        $("#dar").append(data.Gujarat.districtData.Dang.recovered);

        // y=data.Gujarat.districtData.Jamnagar.length;
        $("#jaa").append(data.Gujarat.districtData.Jamnagar.active);
        $("#jac").append(data.Gujarat.districtData.Jamnagar.confirmed);
        $("#jad").append(data.Gujarat.districtData.Jamnagar.deceased);
        $("#jar").append(data.Gujarat.districtData.Jamnagar.recovered);

        // y=data.Gujarat.districtData.Kheda.length;
        $("#kha").append(data.Gujarat.districtData.Kheda.active);
        $("#khc").append(data.Gujarat.districtData.Kheda.confirmed);
        $("#khd").append(data.Gujarat.districtData.Kheda.deceased);
        $("#khr").append(data.Gujarat.districtData.Kheda.recovered);

        // y=data.Gujarat.districtData.Mahisagar.length;
        $("#maa").append(data.Gujarat.districtData.Mahisagar.active);
        $("#mac").append(data.Gujarat.districtData.Mahisagar.confirmed);
        $("#mad").append(data.Gujarat.districtData.Mahisagar.deceased);
        $("#mar").append(data.Gujarat.districtData.Mahisagar.recovered);

        // y=data.Gujarat.districtData.Morbi.length;
        $("#moa").append(data.Gujarat.districtData.Morbi.active);
        $("#moc").append(data.Gujarat.districtData.Morbi.confirmed);
        $("#mod").append(data.Gujarat.districtData.Morbi.deceased);
        $("#mor").append(data.Gujarat.districtData.Morbi.recovered);

        // y=data.Gujarat.districtData.Narmada.length;
        $("#na").append(data.Gujarat.districtData.Narmada.active);
        $("#nc").append(data.Gujarat.districtData.Narmada.confirmed);
        $("#nd").append(data.Gujarat.districtData.Narmada.deceased);
        $("#nr").append(data.Gujarat.districtData.Narmada.recovered);

        // y=data.Gujarat.districtData.Navsari.length;
        $("#naa").append(data.Gujarat.districtData.Navsari.active);
        $("#nac").append(data.Gujarat.districtData.Navsari.confirmed);
        $("#nad").append(data.Gujarat.districtData.Navsari.deceased);
        $("#nar").append(data.Gujarat.districtData.Navsari.recovered);

        // y=data.Gujarat.districtData.Patan.length;
        $("#paa").append(data.Gujarat.districtData.Patan.active);
        $("#pac").append(data.Gujarat.districtData.Patan.confirmed);
        $("#pad").append(data.Gujarat.districtData.Patan.deceased);
        $("#par").append(data.Gujarat.districtData.Patan.recovered);

        // y=data.Gujarat.districtData.Porbandar.length;
        $("#poa").append(data.Gujarat.districtData.Porbandar.active);
        $("#poc").append(data.Gujarat.districtData.Porbandar.confirmed);
        $("#pod").append(data.Gujarat.districtData.Porbandar.deceased);
        $("#por").append(data.Gujarat.districtData.Porbandar.recovered);

        // y=data.Gujarat.districtData.Rajkot.length;
        $("#ra").append(data.Gujarat.districtData.Rajkot.active);
        $("#rc").append(data.Gujarat.districtData.Rajkot.confirmed);
        $("#rd").append(data.Gujarat.districtData.Rajkot.deceased);
        $("#rr").append(data.Gujarat.districtData.Rajkot.recovered);

        // y=data.Gujarat.districtData.Surendranagar.length;
        $("#sura").append(data.Gujarat.districtData.Surendranagar.active);
        $("#surc").append(data.Gujarat.districtData.Surendranagar.confirmed);
        $("#surd").append(data.Gujarat.districtData.Surendranagar.deceased);
        $("#surr").append(data.Gujarat.districtData.Surendranagar.recovered);

        // y=data.Gujarat.districtData.Tapi.length;
        $("#ta").append(data.Gujarat.districtData.Tapi.active);
        $("#tc").append(data.Gujarat.districtData.Tapi.confirmed);
        $("#td").append(data.Gujarat.districtData.Tapi.deceased);
        $("#tr").append(data.Gujarat.districtData.Tapi.recovered);


        $("#vaa").append(data.Gujarat.districtData.Valsad.active);
        $("#vac").append(data.Gujarat.districtData.Valsad.confirmed);
        $("#vad").append(data.Gujarat.districtData.Valsad.deceased);
        $("#var").append(data.Gujarat.districtData.Valsad.recovered);

        $("#cua").append(data.Gujarat.districtData['Chhota Udaipur'].active);
        $("#cuc").append(data.Gujarat.districtData['Chhota Udaipur'].confirmed);
        $("#cud").append(data.Gujarat.districtData['Chhota Udaipur'].deceased);
        $("#cur").append(data.Gujarat.districtData['Chhota Udaipur'].recovered);

//Devbhumi Dwarka

        $("#dda").append(data.Gujarat.districtData['Devbhumi Dwarka'].active);
        $("#ddc").append(data.Gujarat.districtData['Devbhumi Dwarka'].confirmed);
        $("#ddd").append(data.Gujarat.districtData['Devbhumi Dwarka'].deceased);
        $("#ddr").append(data.Gujarat.districtData['Devbhumi Dwarka'].recovered);

        $("#gsa").append(data.Gujarat.districtData['Gir Somnath'].active);
        $("#gsc").append(data.Gujarat.districtData['Gir Somnath'].confirmed);
        $("#gsd").append(data.Gujarat.districtData['Gir Somnath'].deceased);
        $("#gsr").append(data.Gujarat.districtData['Gir Somnath'].recovered);




    },
    error:(data)=>{
        console.log("in error")
        alert("404");   
    }
})  
}
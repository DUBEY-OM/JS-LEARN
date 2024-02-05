function chai() { console.log("DB Connected") }
chai();//requires semicolon here

    // immediately invoked function expressions///
   ( function chai() 
   { console.log("DB Connected")} ) ();


   ((name)=>{console.log(`DB connected to ${name}`)})('om')
    
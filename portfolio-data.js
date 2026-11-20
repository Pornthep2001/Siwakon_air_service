/* Shared Reel data for the portfolio and service pages. */
/*
 * Shared Reel data for the portfolio and service pages.
 * Add each new Facebook Reel as an object in this array:
 * { title: "ชื่อคลิป", description: "รายละเอียดสั้น ๆ", category: "cleaning", thumbnail: "IM/cover.jpg", url: "https://www.facebook.com/reel/123456789/" }
 * Categories include cleaning, electrical, new-ac, used-ac, repair-ac, cctv, satellite,
 * water-heater-install, washing-machine-repair, and parts. thumbnail is optional; video files
 * are never stored here and are played from Facebook when clicked.
 */
window.portfolioVideos = [
    {
        title: "แก้ไขและย้ายจุดติดตั้งกล้องวงจรปิด",
        description: "ตรวจสอบแก้ไขและย้ายจุดติดตั้งกล้องวงจรปิดให้เหมาะสมกับพื้นที่",
        category: "cctv",
        thumbnail: "IM/portfolio-reel-905010372663239.jpg",
        url: "https://www.facebook.com/reel/905010372663239/"
    },
    { title: "ล้างแอร์ 4 ทิศทาง โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านบางแก้ว", description: "ล้างแอร์ 4 ทิศทาง 2 เครื่อง พร้อมตรวจเช็กและทดสอบก่อนส่งมอบ", category: "cleaning", thumbnail: "IM/portfolio-reel-1061971879652116.jpg", url: "https://www.facebook.com/reel/1061971879652116/" },
    { title: "ล้างแอร์เทศบาลซอย 60 พร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 3 ชุด", description: "ส่งมอบงานล้างแอร์สะอาด พร้อมลงน้ำยาดันฝุ่นและฆ่าเชื้อ", category: "cleaning", thumbnail: "IM/portfolio-reel-2955088011520566.jpg", url: "https://www.facebook.com/reel/2955088011520566/" },
    { title: "ติดตั้งระบบกล้องวงจรปิด 2 ตัว", description: "ติดตั้งและตรวจสอบระบบกล้องวงจรปิดให้ใช้งานได้", category: "cctv", thumbnail: "IM/portfolio-reel-2548963705619021.jpg", url: "https://www.facebook.com/reel/2548963705619021/" },
    { title: "ล้างแอร์ร้านเสริมสวยพร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 2 ชุด", description: "ส่งมอบงานล้างแอร์และฆ่าเชื้อครบ 2 ชุด", category: "cleaning", thumbnail: "IM/portfolio-reel-27897531079865943.jpg", url: "https://www.facebook.com/reel/27897531079865943/" },
    { title: "ส่งมอบงานล้างแอร์เรียบร้อย", description: "ตรวจเช็ก ล้างทำความสะอาด และทดสอบการทำงานของแอร์", category: "cleaning", thumbnail: "IM/portfolio-reel-2540435159809106.jpg", url: "https://www.facebook.com/reel/2540435159809106/" },
    { title: "ล้างแอร์บริษัท โค้วโต๊ะฮุย พร้อมลงน้ำยาฆ่าเชื้อ 7 ชุด", description: "ล้างแอร์และลงน้ำยาดันฝุ่นฆ่าเชื้อ 7 ชุด", category: "cleaning", thumbnail: "IM/portfolio-reel-1043027094796280.jpg", url: "https://www.facebook.com/reel/1043027094796280/" },
    { title: "ล้างแอร์ปากซอยหูกวางพร้อมฆ่าเชื้อ 2 ชุด", description: "ล้างแอร์สะอาดพร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 2 ชุด", category: "cleaning", thumbnail: "IM/portfolio-reel-2282450985831415.jpg", url: "https://www.facebook.com/reel/2282450985831415/" },
    { title: "ล้างแอร์โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านบางแก้ว", description: "ส่งมอบงานล้างแอร์ พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-2268538750643005.jpg", url: "https://www.facebook.com/reel/2268538750643005/" },
    { title: "ล้างแอร์บ้านซอยเทศบาล 42", description: "ส่งมอบงานล้างแอร์พร้อมทดสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-1931367910805139.jpg", url: "https://www.facebook.com/reel/1931367910805139/" },
    { title: "ล้างแอร์หน้างานหจก.เพชรศูนย์เพาะกล้ารถดำข้าวหนองปลาไหล", description: "ส่งมอบงานล้างแอร์และตรวจเช็กหน้างาน", category: "cleaning", thumbnail: "IM/portfolio-reel-1714861522893072.jpg", url: "https://www.facebook.com/reel/1714861522893072/" },
    { title: "ล้างแอร์บ้านพื้นที่หูกวาง หมู่ 2 ซอย 7", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-1585507359653522.jpg", url: "https://www.facebook.com/reel/1585507359653522/" },
    { title: "ล้างแอร์พื้นที่เก้าเลี้ยว", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-2465594373928323.jpg", url: "https://www.facebook.com/reel/2465594373928323/" },
    { title: "ล้างแอร์พื้นที่วัดหนองเต่าใต้", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-28286295474321381.jpg", url: "https://www.facebook.com/reel/28286295474321381/" },
    { title: "ล้างแอร์หน้างานพื้นที่วัดอื่น", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-2131795307734874.jpg", url: "https://www.facebook.com/reel/2131795307734874/" },
    { title: "ล้างแอร์หน้างานอำเภอบรรพตพิสัย", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-969322432791285.jpg", url: "https://www.facebook.com/reel/969322432791285/" },
    { title: "ล้างแอร์หน้างานตำบลท่าน้ำอ้อย", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-936354439495461.jpg", url: "https://www.facebook.com/reel/936354439495461/" },
    { title: "ล้างแอร์หน้างานอำเภอเก้าเลี้ยว", description: "ส่งมอบงานล้างแอร์พร้อมตรวจสอบการทำงาน", category: "cleaning", thumbnail: "IM/portfolio-reel-28151637657805475.jpg", url: "https://www.facebook.com/reel/28151637657805475/" },
    { title: "ติดตั้งแอร์บ้านริมน้ำหูกวาง 2 ชุด", description: "ติดตั้งแอร์ให้ลูกค้า พร้อมตรวจสอบการทำงานก่อนส่งมอบ", category: "new-ac", thumbnail: "IM/portfolio-reel-1052108364453126.jpg", url: "https://www.facebook.com/reel/1052108364453126/" },
    { title: "ติดตั้งระบบไฟฟ้าเรียบร้อย", description: "ตรวจสอบและติดตั้งระบบไฟฟ้าให้ใช้งานได้", category: "electrical", thumbnail: "IM/portfolio-reel-893371823456064.jpg", url: "https://www.facebook.com/reel/893371823456064/" },
    { title: "ติดตั้งแอร์เรียบร้อย", description: "ติดตั้งและทดสอบการทำงานของเครื่องปรับอากาศ", category: "new-ac", thumbnail: "IM/portfolio-reel-1307097374626642.jpg", url: "https://www.facebook.com/reel/1307097374626642/" },
    { title: "ติดตั้งกล้องวงจรปิด EZVIZ เรียบร้อย", description: "ติดตั้งกล้องวงจรปิด EZVIZ และตรวจสอบการใช้งาน", category: "cctv", thumbnail: "IM/portfolio-reel-28268224512774099.jpg", url: "https://www.facebook.com/reel/28268224512774099/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1608416644219126.jpg", url: "https://www.facebook.com/reel/1608416644219126/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-909547782212968.jpg", url: "https://www.facebook.com/reel/909547782212968/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-2111798552739002.jpg", url: "https://www.facebook.com/reel/2111798552739002/" },
    { title: "ติดตั้งกล้องวงจรปิด 2 ตัว เรียบร้อย", description: "ติดตั้งและตรวจสอบระบบกล้องวงจรปิด 2 จุด", category: "cctv", thumbnail: "IM/portfolio-reel-2003283703521119.jpg", url: "https://www.facebook.com/reel/2003283703521119/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1081943954171320.jpg", url: "https://www.facebook.com/reel/1081943954171320/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-2101547293805299.jpg", url: "https://www.facebook.com/reel/2101547293805299/" },
    { title: "ผลงานติดตั้งแอร์ใหม่ส่งมอบเรียบร้อย", description: "ติดตั้งแอร์ใหม่และทดสอบการทำงานก่อนส่งมอบ", category: "new-ac", thumbnail: "IM/portfolio-reel-2457569238098472.jpg", url: "https://www.facebook.com/reel/2457569238098472/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1093352576455639.jpg", url: "https://www.facebook.com/reel/1093352576455639/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1050558427562750.jpg", url: "https://www.facebook.com/reel/1050558427562750/" },
    { title: "ผลงานติดตั้งแอร์ส่งมอบเรียบร้อย", description: "ติดตั้งเครื่องปรับอากาศและตรวจสอบการทำงาน", category: "new-ac", thumbnail: "IM/portfolio-reel-4489858051333741.jpg", url: "https://www.facebook.com/reel/4489858051333741/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1619137039804042.jpg", url: "https://www.facebook.com/reel/1619137039804042/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1041992588427597.jpg", url: "https://www.facebook.com/reel/1041992588427597/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1197307625951761.jpg", url: "https://www.facebook.com/reel/1197307625951761/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1085020294035013.jpg", url: "https://www.facebook.com/reel/1085020294035013/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-1607650177574511.jpg", url: "https://www.facebook.com/reel/1607650177574511/" },
    { title: "ส่งมอบงานเรียบร้อย", description: "ชมผลงานบริการและงานส่งมอบจากหน้างานจริง", category: "cleaning", thumbnail: "IM/portfolio-reel-2476777142834817.jpg", url: "https://www.facebook.com/reel/2476777142834817/" },
    { title: "ระบบไฟฟ้าที่ส่งมอบเรียบร้อย", description: "ตรวจสอบและติดตั้งระบบไฟฟ้าให้ใช้งานได้", category: "electrical", thumbnail: "IM/portfolio-reel-2184992135418546.jpg", url: "https://www.facebook.com/reel/2184992135418546/" },
    { title: "ย้ายแอร์พร้อมติดตั้งเรียบร้อย", description: "รื้อย้ายและติดตั้งเครื่องปรับอากาศพร้อมทดสอบการทำงาน", category: "used-ac", thumbnail: "IM/portfolio-reel-4371334223126192.jpg", url: "https://www.facebook.com/reel/4371334223126192/" },
    { title: "ล้างทำความสะอาดแอร์ติดผนัง 1 เครื่อง", description: "ถอด ล้าง และทำความสะอาดแอร์ติดผนัง 1 เครื่อง", category: "cleaning", thumbnail: "IM/portfolio-reel-4445515469111265.jpg", url: "https://www.facebook.com/reel/4445515469111265/" },
    { title: "ล้างทำความสะอาดแอร์ติดผนัง 1 เครื่อง", description: "ถอด ล้าง และทำความสะอาดแอร์ติดผนัง 1 เครื่อง", category: "cleaning", thumbnail: "IM/portfolio-reel-922993500356990.jpg", url: "https://www.facebook.com/reel/922993500356990/" },
    { title: "ล้างทำความสะอาดแอร์ติดผนัง 3 เครื่อง", description: "ถอด ล้าง และทำความสะอาดแอร์ติดผนัง 3 เครื่อง", category: "cleaning", thumbnail: "IM/portfolio-reel-1960051741322605.jpg", url: "https://www.facebook.com/reel/1960051741322605/" },
    { title: "ล้างแอร์แบบถอดชุดพัดลมกรงกระรอก 1 เครื่อง", description: "ถอดชุดพัดลมกรงกระรอก ล้างทำความสะอาด และประกอบกลับ", category: "cleaning", thumbnail: "IM/portfolio-reel-1094588243022845.jpg", url: "https://www.facebook.com/reel/1094588243022845/" },
    { title: "ใส่กริลปรับทิศทางลมคอยล์ร้อน 2 ตัว", description: "ติดตั้งกริลปรับทิศทางลมคอยล์ร้อนให้เหมาะสม", category: "repair-ac", thumbnail: "IM/portfolio-reel-2471260523395134.jpg", url: "https://www.facebook.com/reel/2471260523395134/" },
    {
        title: "บริการล้างแอร์ ซ่อมแอร์ และติดตั้งแอร์",
        description: "ชมบริการล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์และงานบริการครบวงจรจากหน้างานจริง",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1745059369847486.jpg",
        url: "https://www.facebook.com/reel/1745059369847486/"
    },
    {
        title: "ล้างแอร์สะอาดกรับพร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ",
        description: "ล้างแอร์สะอาด พร้อมลงน้ำยาดันฝุ่นและฆ่าเชื้อโรค",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1026026723365520.jpg",
        url: "https://www.facebook.com/reel/1026026723365520/"
    },
    {
        title: "ซ่อมแอร์ 4 ทิศทาง",
        description: "ตรวจเช็กและซ่อมแอร์ 4 ทิศทางถึงที่หน้างาน",
        category: "repair-ac",
        thumbnail: "IM/portfolio-reel-1976115649730743.jpg",
        url: "https://www.facebook.com/reel/1976115649730743/"
    },
    {
        title: "ล้างแอร์พร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ",
        description: "ส่งมอบงานล้างแอร์และลงน้ำยาดันฝุ่นฆ่าเชื้อครบชุด",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1939041736806594.jpg",
        url: "https://www.facebook.com/reel/1939041736806594/"
    },
    {
        title: "ล้างแอร์ 2 ชุดพร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ",
        description: "ล้างแอร์สะอาดพร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 2 ชุด",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1586217226172528.jpg",
        url: "https://www.facebook.com/reel/1586217226172528/"
    },
    {
        title: "ล้างแอร์พร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 1 ชุด",
        description: "ล้างแอร์และลงน้ำยาดันฝุ่นฆ่าเชื้อในหน้างาน",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-2077640959847402.jpg",
        url: "https://www.facebook.com/reel/2077640959847402/"
    },
    {
        title: "บริการล้างแอร์ ซ่อมแอร์ และติดตั้งแอร์",
        description: "รวมผลงานบริการล้างแอร์ ซ่อมแอร์ เติมน้ำยา ติดตั้งแอร์ และย้ายแอร์",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1320498083583189.jpg",
        url: "https://www.facebook.com/reel/1320498083583189/"
    },
    {
        title: "ติดตั้งเครื่องทำน้ำอุ่นเรียบร้อย",
        description: "ส่งมอบงานติดตั้งและตรวจสอบเครื่องทำน้ำอุ่น",
        category: "water-heater-install",
        thumbnail: "IM/portfolio-reel-952859721158585.jpg",
        url: "https://www.facebook.com/reel/952859721158585/"
    },
    {
        title: "ส่งมอบงานแก้ไขเรียบร้อย",
        description: "ตรวจเช็กและส่งมอบงานแก้ไขระบบครบถ้วน",
        category: "repair-ac",
        thumbnail: "IM/portfolio-reel-1371198541005785.jpg",
        url: "https://www.facebook.com/reel/1371198541005785/"
    },
    {
        title: "ผลงานบริการล้างแอร์และซ่อมแอร์",
        description: "รวมบริการล้างแอร์ ซ่อมแอร์ และติดตั้งเครื่องปรับอากาศ",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-850147598181875.jpg",
        url: "https://www.facebook.com/reel/850147598181875/"
    },
    {
        title: "ล้างแอร์แขวน 4 เครื่องและแอร์ฝังผนัง 1 เครื่อง",
        description: "ส่งมอบงานล้างแอร์แขวนและแอร์ฝังผนังเรียบร้อย",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1757835162334218.jpg",
        url: "https://www.facebook.com/reel/1757835162334218/"
    },
    {
        title: "ล้างแอร์พร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 2 ชุด",
        description: "ล้างแอร์สะอาดพร้อมลงน้ำยาดันฝุ่นฆ่าเชื้อ 2 ชุด",
        category: "cleaning",
        thumbnail: "IM/portfolio-reel-1075108055175542.jpg",
        url: "https://www.facebook.com/reel/1075108055175542/"
    },
    {
        title: "ติดตั้งหลอดไฟตู้โชว์สินค้า",
        description: "ติดตั้งหลอดไฟและเก็บงานระบบไฟในตู้โชว์สินค้า",
        category: "electrical",
        thumbnail: "IM/portfolio-electrical-1740865397147106.jpg",
        url: "https://www.facebook.com/reel/1740865397147106/"
    },
    {
        title: "ซ่อมมอเตอร์ประตูม้วน",
        description: "ตรวจเช็กและแก้ไขมอเตอร์ประตูม้วนที่เสียหาย",
        category: "electrical",
        thumbnail: "IM/portfolio-electrical-896087510107753.jpg",
        url: "https://www.facebook.com/reel/896087510107753/"
    },
    {
        title: "แก้ไขระบบไฟฟ้าจุดช็อต",
        description: "ตรวจเช็กระบบไฟและแก้ไขจุดช็อตหน้างาน",
        category: "electrical",
        thumbnail: "IM/portfolio-electric-cover.jpg",
        url: "https://www.facebook.com/reel/856917827443113/"
    },
    {
        title: "ติดตั้งแอร์ที่ลูกค้ามีเครื่องอยู่แล้ว",
        description: "ติดตั้งและตรวจสอบการทำงานของเครื่องปรับอากาศตามมาตรฐาน",
        category: "new-ac",
        thumbnail: "IM/portfolio-new-ac-2532571653906321.jpg",
        url: "https://www.facebook.com/reel/2532571653906321/"
    },
    {
        title: "ติดตั้ง Haier Inverter 12,000 BTU",
        description: "ส่งมอบงานติดตั้งแอร์ Haier Inverter ให้ลูกค้าคลินิก",
        category: "new-ac",
        thumbnail: "IM/portfolio-new-ac-1435892255154443.jpg",
        url: "https://www.facebook.com/reel/1435892255154443/"
    },
    {
        title: "ล้างแอร์ร้านเสริมสวย",
        description: "บริการล้างแอร์แบบติดผนัง พร้อมตรวจเช็กการทำงาน",
        category: "cleaning",
        thumbnail: "IM/portfolio-cleaning-5604966006394308.jpg",
        url: "https://www.facebook.com/reel/5604966006394308/"
    },
    {
        title: "ล้างแอร์ 2 เครื่องและซ่อมเครื่องทำน้ำอุ่น",
        description: "ดูแลงานล้างแอร์พร้อมซ่อมเครื่องทำน้ำอุ่นในหน้างานเดียว",
        category: "cleaning",
        thumbnail: "IM/portfolio-cleaning-1116700914351372.jpg",
        url: "https://www.facebook.com/reel/1116700914351372/"
    },
    {
        title: "ล้างแอร์บ้านหนองน้ำเขียว",
        description: "ล้างแอร์แบบติดผนัง 1 เครื่อง พร้อมตรวจสอบหลังบริการ",
        category: "cleaning",
        thumbnail: "IM/portfolio-cleaning-1613636833741763.jpg",
        url: "https://www.facebook.com/reel/1613636833741763/"
    },
    {
        title: "ล้างแอร์บ้านท่าแรต",
        description: "ส่งมอบงานล้างแอร์แบบติดผนัง 2 เครื่อง",
        category: "cleaning",
        thumbnail: "IM/portfolio-cleaning-1859433691693108.jpg",
        url: "https://www.facebook.com/reel/1859433691693108/"
    },
    {
        title: "ล้างแอร์คลองน้ำโจน",
        description: "บริการล้างแอร์แบบติดผนัง 2 เครื่องให้ลูกค้า",
        category: "cleaning",
        thumbnail: "IM/portfolio-cleaning-880907654989282.jpg",
        url: "https://www.facebook.com/reel/880907654989282/"
    }
];

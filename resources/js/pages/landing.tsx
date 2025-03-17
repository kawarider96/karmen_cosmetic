import { GlassCard } from '@/components/cards/glassCard'
import { Head } from '@inertiajs/react'
import { Box, Stack, Typography, Paper, Button, Card, CardMedia, CardContent, CardActions, Grid2 } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { HiglightText } from '@/components/cards/highlightCard';

export default function Landing() {
    const theme = useTheme<Theme>();

    return (
        <>
            <Head title='Landing page'/>
            <Stack sx={{p:5, backgroundImage:'url(https://i.imgur.com/XycLwZv.jpeg)', backgroundSize:'cover', backgroundPosition:'center', height:'50dvh', display:'flex', flexDirection:'column', }}>
                <Box sx={{display:'flex', flexDirection:'column', height:'100%'}}>
                    <Box sx={{flex:5, display:'flex', justifyContent:"center", alignItems:'center'}}>
                        <Box sx={{p:3, backgroundColor: theme.palette.glass.main,
                        backdropFilter: 'blur(8px)', boxShadow:theme.shadows[10], borderRadius:'10px', display:'flex', flexDirection:'column', gap:'20px'}}>
                            <Typography variant='h4' sx={{color:'#fff', fontWeight:'bolder' }}>Szépség új dimenzióban.</Typography>
                            <Button fullWidth variant='contained'>Foglalj időpontot</Button>
                        </Box>
                    </Box>
                    <Box sx={{flex:1, display:'flex', flexDirection:'column', gap:'10px'}}>
                        <Typography variant='h5' sx={{color:'#fff', fontFamily: 'Outfit, sans-serif', fontWeight:'bolder'}}>Kustra Kármen kozmetikus</Typography>
                        <Typography variant='body2' sx={{color:'#fff', fontFamily: 'Outfit, sans-serif', fontWeight:'bolder'}}>Colonia-Passage Üzletház, Citrom utca 2-6. , Pécs, Hungary</Typography>
                        <Box sx={{display:'flex', gap:'10px'}}>
                            <HiglightText>
                                <PhoneIphoneIcon />
                                <Typography variant='body2'>+36 30 520 1000</Typography>
                            </HiglightText>
                            <Button variant='contained'>
                                <a style={{display:'flex', alignItems:'center'}} href='https://www.facebook.com/profile.php?id=61573648136257' target='_blank'><FacebookIcon sx={{color:'#fff', fontSize:'50px '}}/></a>
                            </Button>
                        </Box>
                    </Box>
                    
                </Box>
            </Stack>

            <Stack sx={{p:2}}>
        
                <Grid2 container spacing={2}>
                    <Grid2 size={{xs:12, lg:4}}>
                        <Card sx={{ p: 2, display:['block', 'flex'], height:"500px" }}>
                            <CardMedia component="img" sx={{height:['50%', '100%']}} image="https://i.imgur.com/Vu7B3Dy.jpeg" />
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <CardContent sx={{height:['200px', '100%'], overflow:'auto', display:'flex', flexDirection:'column', gap:'50px'}}>
                                    <Typography variant="h5">Arckezelések</Typography>
                                    <Typography variant="body2" sx={{textAlign:'justify'}}>
                                    Ez a kozmetikai kezelés a folyamatos újítások miatt ma már több, mint egy hagyományos bőrápolás. Az <strong>Alissa Beauté</strong> a termékeit a bio- és a nanotechnológia együttes alkalmazásával hozza létre, így a hatóanyagok a bőr mélyebb rétegeibe is bejuttathatók.
                                    Az <strong>Alissa Beauté</strong> termékek csúcstechnológiás összetevőivel a kezeléseim során ezt valósítom meg. <br/><br/>
                                    <strong>Hatóanyagok:</strong><br/><br/>
                                    <strong>Matrixyl 3000</strong> – fokozza a kollagéntermelést, csökkenti a ráncokat<br/><br/>
                                    <strong>Syn-Ake</strong> – a mimikai ráncok csökkentésére kifejlesztett biomimetikus peptid<br/><br/>
                                    <strong>Növényi őssejtek</strong> – sejtszinten segítik a bőr regenerációját<br/><br/>
                                    <strong>Hialuronsav</strong> – intenzív hidratálást és feszesítést biztosít, több molekulaméretben fordul elő a mélyebb hidratálás érdekében<br/><br/>
                                    <strong>Fitoösztrogén</strong> - természetes módon utánozza az ösztrogén hatását, így segít megelőzni a bőr öregedésének jeleit. <br/><br/>
                                    A kezelés eredményeként a bőröd feszesebb, simább, ragyogóbb lesz. 
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{flex:1, display:'flex', alignItems:'flex-end'}}>
                                    <Button variant='contained' fullWidth href='https://www.alissa.hu/' target='_blank'>Bővebben...</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid2>

                    <Grid2 size={{xs:12, lg:8}}>
                        <Card sx={{ p: 2, display:['grid','flex'], height:"500px" }}>
                            <CardMedia 
                            sx={{flex:3}}
                            component="iframe" 
                            src="https://www.youtube.com/embed/zqFZGLMi6UM?si=k7tx29RPRDt7aPKA&amp;controls=0"
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            />
                            <Box sx={{display:'flex', flexDirection:'column', flex:2}}>
                                <CardContent sx={{height:['200px', '100%'], overflow:'auto', display:'flex', flexDirection:'column', gap:'50px'}}>
                                    <Typography variant="h5">BBS-29 Thermage mátrixpontos rádiofrekvencia</Typography>
                                    <Typography variant="body2" sx={{textAlign:'justify'}}>
                                    <strong>Kedves Vendégeim és kedves Érdeklődök!</strong><br/><br/>
                                    Megérkezett Szalonunkba az egyik legerősebb non-invazív kozmetikai ránctalanító gép, a BBS-29 Thermage mátrixpontos rádiofrekvencia, az anti-aging gépek királynője.<br/><br/>
                                    <strong>Kinek ajánlom?</strong><br/>
                                    Neked, ha látványos ránctalanítást, tartós arc-liftinget, bőrfeszesítést vagy dekoltázs fiatalítást szeretnél elérni fájdalommentesen, invazív beavatkozás nélkül.<br/><br/>
                                    <strong>Mikortól?</strong><br/>
                                    Akár az első apróbb ráncok megjelenésétől, vagy azt megelőzően. Mára a korábban ismert anti-aging kifejezést felváltotta a smart-aging, ahol a hangsúly a megelőzésen van, azaz minél nagyobb hangsúlyt fektetsz a megelőzésre, annál kevesebb időt, energiát kell később a kezelésekre fordítani. <br/><br/>
                                    <strong>Miben más a Thermage rádiofrekvencia, mint a többi rádiofrekvencia?</strong><br/>
                                    A kezelés során a 64 polaritású 5 mHz-es rádiofrekvenciás fej akár 3-4 mm mélységben is kifejti a hatását a bőrben, azaz nem csak a felszíni ráncok kezelésére alkalmas.<br/><br/>
                                    <strong>Mi várható a Thermage radiofrekvenciától?</strong><br/>
                                    A rádiofrekvenciás fej serkenti a kollagéntermelést, fiatalítva ezzel a bőrt. Legtöbbször a hatás azonnal, vagy másnap reggel látszik. Kúraszerű, ütemezett alkalmazás esetén a hatás akár évekig megmaradhat.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{flex:1, display:'flex', alignItems:'flex-end'}}>
                                    <Button variant='contained' fullWidth href='https://bbsgepek.hu/bbs29/?srsltid=AfmBOoq84g3dwyjroXN2uCipIUNW6DWS0Ufpn5LZ-3jWgo_ZPGFgQJRC' target='_blank'>Bővebben...</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid2>

                    <Grid2 size={{xs:12, lg:12}}>
                        <Card sx={{ p: 2, display:['grid', 'flex'], height:"500px" }}>
                            <CardMedia component="img" sx={{height:['100%', '100%'], maxWidth:['100%', '50%']}} image="https://i.imgur.com/tORDPWF.jpeg" />
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <CardContent sx={{height:['200px', '100%'], overflow:'auto', display:'flex', flexDirection:'column', gap:'50px'}}>
                                    <Typography variant="h5">Adrienne Feller</Typography>
                                    <Typography variant="body2" sx={{textAlign:'justify'}}>
                                    <strong>"Az, hogy mivel ápoljuk a bőrünket, éppoly fontos, mint az, hogy milyen fizikai és szellemi táplálékot veszünk magunkhoz"</strong><br/>állítja a termékcsalád megálmodója és megalkotója, Feller Adrienne.<br/><br/>
                                    Az Adrienne Feller termékek prémium minőségű 100%-ban természetes, kizárólag bio és natúr alapanyagokból készülnek, amelyek egyedi, luxus minőségű összetevőkből állnak. A legnemesebb, színtiszta növényi hatóanyagok luxus érzetet adnak a bőrnek, egyben hatékonyak. Különlegességüket az ásványokban gazdag magyar termálvíz, valamint egy speciális sejtregeneráló hatású elixír, a Pannonesszence adja. A kozmetikumok magas minőségében kulcs szerepe van az illóolajoknak, amelyek a kezelések során a lelket is harmóniába hozzák. <br/><br/>
                                    <strong>Miben áll a termékek egyedisége? </strong><br/>
                                    Bio alapanyagok<br/>
                                    Minerális bőrfeszesítés termálvízzel<br/>
                                    Prémium minőségű aktív illóolajok<br/>
                                    Vitaminokban és nyomelemekben gazdag hidegen préselt növényi olajok<br/>
                                    Pannonessence - 7 magyar gyógynövény különleges ereje minden termékben<br/>
                                    Parabénmentes, szintetikus összetevő mentes<br/>
                                    Magas hatásfokú prémium minőségű szépségápolás. <br/><br/>
                      
                                    Az Alissa Beauté olasz professzionális  natúrkozmetikai termékcsalád. Illata elegáns, púderes. Jövőképe egyszerű és tiszta:<br/>
                                    mentes minden irritáló anyagtól, hipoallergén illatokat alkot<br/>
                                    koncentráltan tartalmaz tiszta és természetes hatóanyagokat<br/>
                                    a tökéletesen tiszta, természetes olajokat és hatóanyagokat egyedülállóan ötvözi a legmagasabb szintű biotechnológiával, kiegyensúlyozott receptúrákat alkotva. <br/>
                                    A márka a különböző bőrtípusoknak megfelelő célzott megoldásokat kínál a bőr igényeihez igazodva. Kimagasló hatékonyság a bőrproblémák kezelésében.<br/>
                                    A termékek megfelelnek a legmagasabb minőségi elvárásoknak, mikroemulziós cseppekből állnak, amelyek lehetővé teszik, hogy a hatóanyagok mélyen és intenzíven felszívódjanak a bőrben, amelynek hatása gépi kezeléssel fokozható. <br/>
                                    A Bio Active szérumok akár 98%-ban tartalmaznak természetes hatóanyagokat, amelyek növényi, gyümölcs-, virág- és tengeri alapanyagokból származnak.<br/><br/>
                                    Az Alissa Beauté a kozmetikumait azoknak ajánlja, akik komolyan veszik a szépséget.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{flex:1, display:'flex', alignItems:'flex-end'}}>
                                    <Button variant='contained' fullWidth href='https://af.panarom.hu/rolunk/filozofia' target='_blank'>Bővebben...</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid2>
                </Grid2>

            </Stack>
        </>
    )
}
import WhatsAppForm from '@/components/WhatsAppForm';
import { pageContent } from './page-content';
export default function InteractivePage({name}:{name:'appointment'|'contact'}){
 const html=pageContent[name]; const marker='<div data-form-slot="true"></div>'; const [before,after]=html.split(marker);
 return <main><div dangerouslySetInnerHTML={{__html:before}}/><WhatsAppForm appointment={name==='appointment'}/><div dangerouslySetInnerHTML={{__html:after}}/></main>
}

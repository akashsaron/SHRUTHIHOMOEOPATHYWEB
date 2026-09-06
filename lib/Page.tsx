import { pageContent } from './page-content';
export default function Page({name}:{name:string}){return <main dangerouslySetInnerHTML={{__html: pageContent[name] || pageContent['404']}}/>}

import React from 'react';
import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const PaymentsIcon: React.FunctionComponent<Props> = props => (
  <SvgIcon viewBox="0 0 20 18" width={20} height={18} {...props}>
    <path
      d="M6.48003857,0.000215516104 C3.01324889,0.000215516104 0.180803033,1.39349357 0.00723212133,3.14567785 C0.103962033,4.12633453 1.12007624,4.80817111 1.77909028,5.15881165 C2.95069393,5.76571227 4.62588466,6.16537854 6.47985343,6.16537854 C7.00327387,6.16537854 7.51223007,6.12929845 7.99859891,6.06916259 C9.20454646,4.88681359 10.8118363,4.12634638 12.5910538,4.03381327 C12.7664322,3.75164297 12.9219263,3.44910448 12.9526599,3.16046847 C12.6019078,0.584841411 8.22829108,-0.00820411993 6.47985343,8.52545056e-05 L6.48003857,0.000215516104 Z M12.9600193,4.73700091 C9.38098708,4.73700091 6.48003857,7.70578115 6.48003857,11.3685005 C6.48003857,15.0312198 9.38098708,18 12.9600193,18 C16.5390515,18 19.44,15.0312198 19.44,11.3685005 C19.44,7.70578115 16.5390515,4.73700091 12.9600193,4.73700091 Z M0.00723212133,5.04043938 L0.00723212133,6.01001198 C0.0786484516,6.70757468 0.680733545,7.42458189 1.77909028,7.99354086 C2.8846907,8.56621822 4.44051093,8.95015836 6.16904578,8.99271837 C6.39776133,8.30718711 6.72590755,7.66788687 7.13090635,7.09061483 C6.91665504,7.10171667 6.69968677,7.10541729 6.48001543,7.10541729 C4.49931675,7.10541729 2.70033525,6.69741428 1.35967352,6.00264628 C0.836253083,5.73158374 0.377007592,5.40592974 0.00725526412,5.04048675 L0.00723212133,5.04043938 Z M14.7607596,7.70488116 C15.2823749,8.09159232 15.6593478,8.7364346 15.7371076,9.55518795 C15.7597079,9.80313499 15.5599218,10.0501347 15.3176446,10.0732739 C15.0753673,10.0964131 14.8340066,9.89194497 14.8113961,9.64400268 C14.7562514,9.05929389 14.5293318,8.70498234 14.2183621,8.47460879 C13.9073925,8.24423523 13.488832,8.14710744 13.0756869,8.19336215 C12.2503225,8.28587631 11.4954742,8.8594726 11.5641852,10.0436689 C11.5804573,10.3054948 11.6003458,10.5524944 11.6220421,10.7837917 L13.6542566,10.7837917 C13.8983436,10.7800911 14.1234304,11.0067545 14.1234304,11.2574702 C14.1234304,11.5081859 13.8983298,11.7348434 13.6542566,11.7311487 L11.7160481,11.7311487 C11.7485915,12.0660632 11.7757126,12.3889224 11.7739051,12.7007213 C11.771193,13.2400754 11.623838,13.7794532 11.3833705,14.3363807 L15.2741361,14.3363807 C15.5182231,14.3326801 15.7433099,14.5593436 15.7433099,14.8100592 C15.7433099,15.0607749 15.5182092,15.2874325 15.2741361,15.2837378 L10.6455785,15.2837378 C10.3156086,15.2809623 10.081473,14.8341221 10.2622876,14.5510045 C10.7332896,13.8321499 10.8453702,13.3372032 10.8480779,12.6932846 C10.8498858,12.4111143 10.8191494,12.089155 10.7829888,11.7311251 L10.1827111,11.7311251 C9.93862414,11.7348257 9.71353738,11.5081622 9.71353738,11.2574465 C9.71353738,11.0067308 9.93863802,10.7800733 10.1827111,10.783768 L10.6962033,10.783768 C10.677219,10.5691324 10.6528106,10.3461601 10.6383463,10.1028551 C10.5434239,8.45424061 11.7394339,7.39128228 12.9743794,7.25344183 C13.732838,7.21181022 14.3249694,7.39221543 14.7607249,7.70490484 L14.7607596,7.70488116 Z M0.00723212133,7.88251061 L0.00723212133,8.85208321 C0.0786484516,9.54964592 0.680733545,10.2666531 1.77909028,10.8356121 C2.80605151,11.3675768 4.21903444,11.7431802 5.80014974,11.8273765 C5.7911097,11.6747265 5.78568549,11.5229907 5.78568549,11.3685005 C5.78568549,10.8772484 5.83269313,10.3970805 5.9230958,9.93266238 C4.16477618,9.86234954 2.57271434,9.46544955 1.35956938,8.83728076 C0.83614894,8.56621822 0.37690345,8.24795361 0.00715112157,7.88251061 L0.00723212133,7.88251061 Z M0.00723212133,10.7245818 L0.00723212133,11.6941544 C0.0786484516,12.3917171 0.680733545,13.1087244 1.77909028,13.6776833 C3.40540344,14.492742 5.0968404,14.6731425 6.55946462,14.6842502 C6.26476435,14.089381 6.04326473,13.4491808 5.91581739,12.7747336 C4.16022862,12.7034971 2.57099021,12.3065971 1.35946524,11.679352 C0.836044797,11.4082895 0.376799307,11.0900248 0.00704697903,10.7245818 L0.00723212133,10.7245818 Z M0,13.5666531 L0,14.6842502 C0,16.5151362 2.90187422,18 6.47998071,18 C7.48796486,18 8.43626375,17.8769549 9.28604379,17.6669566 C8.42633549,17.140534 7.67961029,16.4429713 7.10194315,15.6094155 C6.89673142,15.6195922 6.69062637,15.6316191 6.47998071,15.6316191 C4.49928204,15.6316191 2.70030053,15.2162268 1.35963881,14.5214351 C0.834413231,14.2494489 0.370654897,13.9330316 0,13.5666531 Z"
      transform="translate(.323)"
    />
  </SvgIcon>
);

export default PaymentsIcon;

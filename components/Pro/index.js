import React from 'react';
import Image from 'next/image';
import Food from '../../public/food.png';
import Sign from '../../public/SIGN UP.png';
import Wh from '../../public/Cover.png'

import Challenge from '../../public/challenge.jpg'
import Link from 'next/link';
function Pro() {
  return (
    <div className="mt-10 container mx-auto px-4">
      <div className="flex flex-col md:flex-row space-between gap-4"> {/* Updated flex class */}
        <div className="rounded-lg shadow-md overflow-hidden w-full md:w-1/2 px-4 mb-4 md:mb-0 transition-all ease-out duration-300"> {/* Updated width class */}
         
        <Link  href="https://www.figma.com/proto/Ic8dxDcdW4k51D33sT8Zpp/Whatsapp?page-id=0%3A1&node-id=8-804&viewport=206%2C1317%2C0.35&t=q8d6czft3Yw8qbN2-1&scaling=min-zoom&starting-point-node-id=1%3A19">
            <Image
              className="w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Wh}
              alt="Card image 2"
            />
            </Link>
            <div className="p-4">
            <h5 className="text-lg font-medium">Effortless Email Integration: WhatsApp Redefined</h5>
            <p className="text-sm text-gray-500">Unlock seamless email integration in WhatsApp. Enjoy sleek design and effortless navigation.</p>
          </div>

          <Link  href="https://www.figma.com/proto/5GesldQ14HMOs2jWoMyYej/MyFUSE?page-id=0%3A1&node-id=47-16&viewport=47%2C436%2C0.38&t=kzUBGd6fkwIgC53F-1&scaling=min-zoom">
            <Image
              className="w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Challenge}
              alt="Card image 2"
            />
            </Link>
            <div className="p-4">
            <h5 className="text-lg font-medium">My Fuse Challange</h5>
            
          </div>

         <Link href="https://www.figma.com/proto/siBoZyp8UmJSEcTWpJJlU0/Task-3?page-id=0%3A1&type=design&node-id=5-62&viewport=330%2C365%2C0.45&t=Af0xA1s3pgySS3Sr-1&scaling=min-zoom&starting-point-node-id=5%3A62&mode=design" ><div className="relative rounded-lg overflow-hidden"  >
            <Image
              className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Food}
              alt="Card image 1"
            />


          </div></Link> 

          
          
          <div className="p-4">
            <h5 className="text-lg font-medium">AURA: Streamlined Food Ordering Experience</h5>
            <p className="text-sm text-gray-500">Revolutionize your dining journey with EatsEase—an intuitive and visually delightful UI/UX design that simplifies food ordering for a seamless and enjoyable experience.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden w-full md:w-1/2 px-4 mb-4 md:mb-0 transition-all ease-out duration-300"> {/* Updated width class */}
          <div className="relative rounded-lg overflow-hidden">

            

            <Link  href="https://www.figma.com/proto/Ekejy0cQVAfgfsN7CYSV0b/TASK1?page-id=0%3A1&type=design&node-id=1-2&viewport=186%2C365%2C0.85&t=yq7bCsWlrZPTQYBA-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design">
            <Image
              className="w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={Sign}
              alt="Card image 2"
            />
            </Link>
          </div>
          <div className="p-4">
            <h5 className="text-lg font-medium">AccessHub: Intuitive Sign-In/Sign-Up Design</h5>
            <p className="text-sm text-gray-500">Unlock a seamless and visually engaging login experience with AccessHub, featuring a modern UI/UX design adorned with stylish vector images for effortless access</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pro;

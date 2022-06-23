import { Meta, Story } from "@storybook/react";
import { Grid, Select } from "../../components";
import { ISelectProps, ISelectItem } from "../../utils";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const items: ISelectItem[] = [
  {
    id: 1,
    value: "Bentley",
    label: "Bentley",
    image: "https://cdn.iconscout.com/icon/free/png-256/bentley-202732.png",
  },
  {
    id: 2,
    value: "Mercedes Benz",
    label: "Mercedes Benz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
  },
  {
    id: 3,
    value: "Mini Cooper",
    label: "Mini Cooper",
    image:
      "https://e7.pngegg.com/pngimages/436/206/png-clipart-mini-cooper-mini-e-car-bmw-cars-logo-brands-emblem-logo.png",
  },
  {
    id: 4,
    value: "Subaru",
    label: "Subaru",
    image:
      "https://e7.pngegg.com/pngimages/774/991/png-clipart-subaru-xv-car-logo-subaru-legacy-subaru-emblem-logo.png",
  },
  {
    id: 5,
    value: "Nissan",
    label: "Nissan",
    image:
      "https://img2.pngdownload.id/20180802/ivx/kisspng-logo-nissan-car-brand-emblem-nissan-maxima-workshop-service-amp-repair-manual-5b63b1ee7124e1.4901775015332602704635.jpg",
  },
  {
    id: 6,
    value: "Porsche",
    label: "Porsche",
    image:
      "https://w7.pngwing.com/pngs/912/318/png-transparent-porsche-911-car-audi-rs-2-avant-porsche-macan-porsche-emblem-label-logo.png",
  },
  {
    id: 7,
    value: "BMW",
    label: "BMW",
    image: "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19707.png",
  },
  {
    id: 8,
    value: "Volkswagen",
    label: "Volkswagen",
    image:
      "https://www.freepnglogos.com/uploads/vw-png-logo/vw-auto-fraud-png-logo-9.png",
  },
  {
    id: 9,
    value: "Bugatti",
    label: "Bugatti",
    image: "https://pngimg.com/uploads/bugatti_logo/bugatti_logo_PNG4.png",
  },
  {
    id: 10,
    value: "Toyota",
    label: "Toyota",
    image:
      "https://www.freepnglogos.com/uploads/toyota-logo-png/logo-toyota-transparent-19.png",
  },
  {
    id: 11,
    value: "Honda",
    label: "Honda",
    image:
      "https://www.freeiconspng.com/uploads/honda-logo-transparent-background-0.jpg",
  },
  {
    id: 12,
    value: "Ferrari",
    label: "Ferrari",
    image:
      "https://icon2.cleanpng.com/20171220/tqe/ferrari-logo-png-image-5a3abf386f33d6.0122773515137994804555.jpg",
  },
  {
    id: 13,
    value: "Mitsubishi",
    label: "Mitsubishi",
    image:
      "https://toppng.com/uploads/preview/mitsubishi-logo-11530961040zbn1z0puwo.png",
  },
  {
    id: 14,
    value: "Lotus",
    label: "Lotus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lotus_Cars_2019_logo.svg/1200px-Lotus_Cars_2019_logo.svg.png",
  },
  {
    id: 15,
    value: "Lykan",
    label: "Lykan",
    image:
      "https://img2.pngdownload.id/20180406/liq/kisspng-lykan-hypersport-w-motors-sports-car-geneva-motor-maybach-5ac72402966c23.8411265415230003226161.jpg",
  },
  {
    id: 16,
    value: "Lamborghini",
    label: "Lamborghini",
    image: "https://www.carlogos.org/car-logos/lamborghini-logo-1100x1200.png",
  },
  {
    id: 17,
    value: "Rolls Royce",
    label: "Rolls Royce",
    image:
      "https://w7.pngwing.com/pngs/904/873/png-transparent-rolls-royce-holdings-plc-car-2013-rolls-royce-phantom-rolls-royce-ghost-car-text-rectangle-logo.png",
  },
  {
    id: 18,
    value: "McLaren",
    label: "McLaren",
    image: "https://freepngimg.com/thumb/categories/331.png",
  },
  {
    id: 19,
    value: "Ford",
    label: "Ford",
    image:
      "https://w7.pngwing.com/pngs/468/848/png-transparent-logo-ford-logo-car-car-standard-pattern-flag-cars.png",
  },
  {
    id: 20,
    value: "Alpine",
    label: "Alpine",
    image:
      "https://w7.pngwing.com/pngs/302/495/png-transparent-car-alpine-electronics-vehicle-audio-logo-supply-angle-text-logo.png",
  },
  {
    id: 21,
    value: "Mazda",
    label: "Mazda",
    image:
      "https://w7.pngwing.com/pngs/680/432/png-transparent-mazda-mx-5-car-logo-subaru-emblem-logo-car.png",
  },
  {
    id: 22,
    value: "Audi",
    label: "Audi",
    image:
      "https://w7.pngwing.com/pngs/297/850/png-transparent-audi-car-graphics-logo-auto-union-audi-text-trademark-logo.png",
  },
  {
    id: 23,
    value: "Jaguar",
    label: "Jaguar",
    image:
      "https://e7.pngegg.com/pngimages/1014/793/png-clipart-jaguar-cars-tata-motors-logo-jaguar-animals-text.png",
  },
  {
    id: 24,
    value: "Volvo",
    label: "Volvo",
    image:
      "https://w7.pngwing.com/pngs/156/359/png-transparent-volvo-cars-ab-volvo-volvo-xc90-volvo-text-trademark-logo.png",
  },
  {
    id: 25,
    value: "Maserati",
    label: "Maserati",
    image:
      "https://w7.pngwing.com/pngs/1014/354/png-transparent-maserati-mc12-sports-car-mercedes-benz-maserati-emblem-logo-car.png",
  },
];
const Template: Story<ISelectProps> = (args) => (
  <Grid container>
    <Select
      defaultValue={[
        {
          id: 1,
          value: "Bentley",
          label: "Bentley",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/bentley-202732.png",
        },
        {
          id: 2,
          value: "Mercedes Benz",
          label: "Mercedes Benz",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
        },
      ]}
      onChange={(item) => console.log(item)}
      {...args}
    />
    <Select
      defaultValue={[
        {
          id: 1,
          value: "Bentley",
          label: "Bentley",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/bentley-202732.png",
        },
        {
          id: 2,
          value: "Mercedes Benz",
          label: "Mercedes Benz",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
        },
      ]}
      onChange={(item) => console.log(item)}
      {...args}
    />
  </Grid>
);

export const SearchableSelect = Template.bind({});

SearchableSelect.args = {
  multiple: true,
  disabled: false,
  placeholder: "",
  items,
};

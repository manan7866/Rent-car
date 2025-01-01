import { type SchemaTypeDefinition } from 'sanity'
import {CarsType}  from "@/sanity/schemaTypes/Cars";
import {Cartwo} from "@/sanity/schemaTypes/Cartwo"
import {CarCt} from "@/sanity/schemaTypes/Car-ct"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CarsType ,Cartwo,CarCt],
}

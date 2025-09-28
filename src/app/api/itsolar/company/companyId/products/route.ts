import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ companyId: string }> }
) {
  try {
    const { companyId } = await context.params
    const company_id = parseInt(companyId)

    const products = await prisma.products.findMany({
      where: { company_id },
      orderBy: { id: 'desc' }
    })

    return NextResponse.json({ 
      success: true, 
      products 
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch products'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ companyId: string }> }
) {
  try {
    const { companyId } = await context.params
    const company_id = parseInt(companyId)
    const data = await request.json()

    const newProduct = await prisma.products.create({
      data: {
        company_id,
        name: data.name,
        description: data.description,
        price: data.price
      }
    })

    return NextResponse.json({ 
      success: true, 
      product: newProduct 
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to create product'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

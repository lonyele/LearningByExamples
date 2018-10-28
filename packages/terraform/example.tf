provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

resource "aws_instance" "terraform-example" {
  ami           = "ami-b374d5a5"
  instance_type = "t2.micro"
  depends_on    = ["aws_s3_bucket.terraform-s3-example-whatt"]

  provisioner "local-exec" {
    command = "echo ${aws_instance.terraform-example.public_ip} > ip_address.txt"
  }
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.terraform-example.id}"
}

# New resource for the S3 bucket our application will use.
resource "aws_s3_bucket" "terraform-s3-example-whatt" {
  # NOTE: S3 bucket names must be unique across _all_ AWS accounts, so
  # this name must be changed before applying this example to avoid naming
  # conflicts.
  bucket = "terraform-getting-started-guide-whatttttt"

  acl = "private"
}

module "consul" {
  source = "hashicorp/consul/aws"

  num_servers = "3"
}
